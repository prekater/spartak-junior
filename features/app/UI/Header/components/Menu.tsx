import cn from 'clsx'

import { useScrollspy } from 'features/app/hooks/useScrollspy'
import { TMenu } from 'features/app/types'

import { useNavigation } from '../../../providers/NavigationProvider'

import styles from './Menu.module.scss'

const list: TMenu[] = [
  {
    id: 1,
    title: 'Пройти тест',
    anchor: 'adviceAndTest',
    isShowItem: true
  },
  {
    id: 2,
    title: 'Личный кабинет',
    anchor: 'account',
    isShowItem: true
  },
  {
    id: 3,
    title: 'Адреса школ',
    anchor: 'address',
    isShowItem: false
  },
  {
    id: 4,
    title: 'Яркие моменты',
    anchor: 'moments',
    isShowItem: false
  },
  {
    id: 5,
    title: 'Методика',
    anchor: 'method',
    isShowItem: false
  },
  {
    id: 6,
    title: 'Отзывы',
    anchor: 'reviews',
    isShowItem: false
  },
  {
    id: 7,
    title: 'Ответы на вопросы',
    anchor: 'faq',
    isShowItem: true
  },
  {
    id: 8,
    title: 'Магазин',
    anchor: 'store',
    isShowItem: true
  }
]

const makeIds = () => {
  const ids: Array<string> = []
  list.forEach(item => ids.push(item.anchor))
  return ids
}

interface IMenu {
  onClose?: () => void
}

const Menu = ({ onClose }: IMenu) => {


  const { handleScroll, reviewsRef, methodRef, momentsRef, addressRef, adviceAndTestRef, accountRef, faqRef, storeRef } = useNavigation()

  const makeNavRef = (name: string) => {
    switch (name) {
      case 'adviceAndTest':
        return adviceAndTestRef
      case 'account':
        return accountRef
      case 'address':
        return addressRef
      case 'moments':
      default:
        return momentsRef
      case 'method':
        return methodRef
      case 'reviews':
        return reviewsRef
      case 'faq':
        return faqRef
      case 'store':
        return storeRef
    }
  }

  const activeId = useScrollspy(makeIds(), 60) // 54 is navigation height

  const handleNavLinkClick = (name: string) => {
    const makeRef = makeNavRef(name)
    handleScroll(makeRef)
    !!onClose && onClose()
  }

  return (
    <ul className={styles.root} id="nav-menu">
      {list.map(item => (
        <li className={cn(styles.item, { [styles.item_modal]: item.isShowItem })} key={item.id} id={`link-${item.anchor}`}>
          <a
            className={cn(styles.link, { [styles.link_active]: activeId === item.anchor })}
            onClick={() => handleNavLinkClick(item.anchor)}
          >
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Menu
