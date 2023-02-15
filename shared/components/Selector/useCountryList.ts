export interface ICountryList {
  countryCode: string
  title: string
  icon: string
  placeholder: string
}

export const useCountryList: ICountryList[] = [
  {
    title: 'Azerbaijan (Azərbaycan)',
    countryCode: '+994',
    placeholder: '99-999-99-99',
    icon: '/images/flags/Azerbaijan.svg'
  },

  {
    title: 'Belarus (Беларусь)',
    countryCode: '+375',
    placeholder: '(99) 999-99-99',
    icon: '/images/flags/Belarus.svg'
  },

  {
    title: 'Georgia (საქართველო)',
    countryCode: '+995',
    placeholder: '(999) 999-999',
    icon: '/images/flags/georgia.svg'
  },

  {
    title: 'Kazakhstan (Казахстан)',
    countryCode: '+7',
    placeholder: '(999) 999-99-99',
    icon: '/images/flags/kazakhstan.svg'
  },

  {
    title: 'Kyrgyzstan (Кыргызстан)',
    countryCode: '+996',
    placeholder: '(999) 999-999',
    icon: '/images/flags/kyrgystan.svg'
  },
  {
    title: 'Lithuania (Lietuva)',
    countryCode: '+370',
    placeholder: '(999) 99-999',
    icon: '/images/flags/lithuania.svg'
  },
  {
    title: 'Russian Federation (Российская Федерация)',
    countryCode: '+7',
    placeholder: '(999) 999-99-99',
    icon: '/images/flags/russia.svg'
  },
  {
    title: 'Turkmenistan',
    countryCode: '+993',
    placeholder: '9-999-9999',
    icon: '/images/flags/turkmenistan.svg'
  },
  {
    title: 'Ukraine (Україна)',
    countryCode: '+380',
    placeholder: '(99) 999-99-99',
    icon: '/images/flags/ukraine.svg'
  },

  {
    title: 'Uzbekistan (Oʻzbekiston)',
    countryCode: '+998',
    placeholder: '99-999-9999',
    icon: '/images/flags/uzbekistan.svg'
  }
]
