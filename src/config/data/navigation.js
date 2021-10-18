import {
  //  AcademicCapIcon,
   BriefcaseIcon,
   CodeIcon,
   MailIcon,
   UserCircleIcon
 } from "@heroicons/react/outline"
 
const navigation =  [
  {
    name: 'About',
    href: '/about',
    icon: UserCircleIcon,
    current: false,
  },
    {
    name: 'My Skills',
    href: '/skills',
    icon: CodeIcon,
    current: false,
  },
  {
    name: 'Work',
    href: '/work',
    icon: BriefcaseIcon,
    current: false,
  },
  // {
  //   name: 'Qualification',
  //   href: '/',
  //   icon: AcademicCapIcon,
  //   current: false,
  // },
  {
    name: 'Contact',
    href: '/contact',
    icon: MailIcon,
    current: false,
  }

]


// navigation.sort((a, b) => {
//    let fa = a.name.toLowerCase(),
//        fb = b.name.toLowerCase();

//    if (fa < fb) {
//        return -1;
//    }
//    if (fa > fb) {
//        return 1;
//    }
//    return 0;
// } );

export default navigation