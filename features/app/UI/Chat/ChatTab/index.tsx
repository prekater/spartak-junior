import {useState} from 'react'

import cn from 'clsx'

import {ChatInputBlock} from './ChatInputBlock'
import {UserMsg} from './UserMsg'
import dynamic from 'next/dynamic'

import styles from './ChatTab.module.scss'

const OperatorMsg = dynamic(() => import('./OperatorMsg'), {
    ssr: false,
});


const operatorMessages = [
    'Добрый день. Меня зовут Вячеслав Александрович, я являюсь руководителем школы Спартак Москва Юниор в Северном и Северо-Восточном округах Москвы. Готов обсудить детали записи на просмотр в нашу школу.',
    'Здорово, что обратились к нам. Пока я готовлю ответ, подскажите свой номер телефона или адрес электронной почты. Если вы устанете ждать или случайно отключитесь, я перезвоню или подробно расскажу в письме.'
]

export const ChatTab = () => {
    const [isFormFulfilled, setIsFormFulfilled] = useState(false)

    const handleFormFulfilled = () => setIsFormFulfilled(true)

    const [isShowWarning, setIsShowWarning] = useState(false)

    const handleShowWarning = (param: boolean) => setIsShowWarning(param)

    const warningClassName = cn(styles.warning, {[styles.warning__show]: !isFormFulfilled && isShowWarning})

    return (
        <div className={styles.root}>
            <div className={styles.messages}>
                <OperatorMsg isShowForm message={operatorMessages[0]} onSubmitForm={handleFormFulfilled}
                             isFormFulfilled={isFormFulfilled}/>
                <UserMsg message="Вы продаёте рыбов?"/>
                <OperatorMsg message={operatorMessages[1]}/>
            </div>
            <ChatInputBlock onHover={handleShowWarning} isDisabled={!isFormFulfilled}/>
            <div className={warningClassName}>Заполните контакты</div>
        </div>
    )
}
