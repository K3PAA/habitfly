export const home = {
  whyUs: [
    {
      title: 'Tracking Habits made simple',
      desc: 'With our friendly interface making your habit list is really easy. It will take you only few minutes and will last forever.',
      src: '/home/1.svg',
    },
    {
      title: 'Make your habits stick',
      desc: 'With tracking your habits you are more likely to stick to them. With using our application you greatly increases your chances of creating lasting changes.',
      src: '/home/2.svg',
    },
    {
      title: 'Make your journey satisfying',
      desc: 'With modern interface and graphs you will see your progress easily. This will result in more motivation and satisfaction as you push through your habits.',
      src: '/home/3.svg',
    },
  ],
}

export const navLinks = [
  {
    to: '/profile',
    text: 'view your profile',
  },
  {
    text: 'habits',
    children: [
      { to: '/habits/daily', text: 'daily' },
      { to: '/habits/weekly', text: 'weekly' },
      { to: '/habits/monthly', text: 'monthly' },
    ],
  },
  {
    to: '/goals',
    text: 'goals',
  },
]
