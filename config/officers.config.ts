export type Officer = {
  name: string;
  position: string;
  image: string;
  level?: number;
  socialLinks?: Record<string, string>;
};

export const advisorOfficers: Officer[] = [
  {
    image: '/assets/JohnCole.png',
    name: 'John Cole',
    position: 'ACM Faculty Advisor',
  },
];

export const executiveOfficers: Officer[] = [
  {
    image: '/assets/OfficerImage.png',
    name: 'Elijah Walker',
    position: 'ACM President',
    level: 3,
  },
  {
    image: '/assets/officer/Hiba-Mubeen.jpg',
    name: 'Hiba Mubeen',
    position: 'ACM Vice President',
    level: 3,
    socialLinks: {
      'linkedin': 'https://www.linkedin.com/in/hiba-mubeen',
      'github': 'https://github.com/hibamubeen',
      'personalEmail': 'hiba.mubeen7@gmail.com',
    },
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Mercedes Xiong',
    position: 'ACM Vice President',
    level: 3,
    socialLinks: {
      'linkedin': 'https://www.linkedin.com/in/mercedes-xiong/',
      'github': 'https://github.com/MercedesX3',
      'personalEmail': 'mxiong935@gmail.com',
    },
  },
];

export const mediaOfficers: Officer[] = [
  {
    image: '/assets/OfficerImage.png',
    name: 'Akshat Chauhan',
    position: 'Marketing Officer',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Alishba Jafri',
    position: 'Media Officer',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Anvi Sidda',
    position: 'Media Co-director',
    level: 2,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Batrisyia Nablan',
    position: 'Design Officer',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Damian Izaguirre',
    position: 'Design Officer',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Dax Dwelle',
    position: 'Marketing Officer',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Eshi Punuganti',
    position: 'Hybrid Officer',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Lisa Lupeitu\'u',
    position: 'Marketing Coordinator',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Rohan Cheruku',
    position: 'Media Officer',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Sai Varun Mallela',
    position: 'Marketing Officer',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Sandra Luo',
    position: 'Design Officer',
    level: 1,
  },
  {
    image: '/assets/officer/Sneha-Maram.jpg',
    name: 'Sneha Maram',
    position: 'Media Director',
    level: 2,
  },
  {
    image: '/assets/officer/Susan-Zhang.jpg',
    name: 'Susan Zhang',
    position: 'Design Officer',
    level: 1,
    socialLinks: {
      'linkedin': 'https://www.linkedin.com/in/susan-zh4ng/',
      'personalEmail': 'Susan.Zhang901@gmail.com',
    },
  },
];

export const researchOfficers: Officer[] = [
  {
    image: '/assets/OfficerImage.png',
    name: 'Abhijith Utla',
    position: 'Research Lead',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Alex Miller',
    position: 'Research Lead',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Deeksha Bandi',
    position: 'Research Lead',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Mahd Malik',
    position: 'Research Lead',
    level: 1,
    socialLinks: {
      'linkedin': 'https://www.linkedin.com/in/mahd-malik-497ba629b/',
      'github': 'https://github.com/MahdMalik',
      'personalEmail': 'mahdmahdmalik@gmail.com',
    },
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Nathan Han',
    position: 'Research Lead',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Nidhi Majoju',
    position: 'Research Lead',
    level: 1,
  },
  {
    image: '/assets/officer/Priti-See.jpg',
    name: 'Priti See',
    position: 'Research Director',
    level: 2,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Purva Patel',
    position: 'Research Director',
    level: 2,
    socialLinks: {
      'linkedin': 'https://www.linkedin.com/in/purvajpatel/',
      'github': 'http://github.com/purvajpatel/',
      'personalEmail': 'purva.patel@utdallas.edu',
    },
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Quan Do',
    position: 'Research Lead',
    level: 1,
    socialLinks: {
      'linkedin': 'https://www.linkedin.com/in/quan-do-4b5741277/',
      'github': 'https://github.com/quanngunhu2006',
      'personalEmail': 'dohuudamquan@gmail.com',
    },
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Sai Chauhan',
    position: 'Research Lead',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Shreyaj Padigala',
    position: 'Lead',
    level: 1,
  },
  {
    image: '/assets/officer/Tushaar-Sood.jpg',
    name: 'Tushaar Sood',
    position: 'Research Lead',
    level: 1,
    socialLinks: {
      'linkedin': 'https://www.linkedin.com/in/tushaarsood123',
      'github': 'https://github.com/toosh-legacy',
      'personalEmail': 'tushsood@gmail.com',
    },
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Zoë Bryant',
    position: 'Research Lead',
    level: 1,
    socialLinks: {
      'linkedin': 'https://www.linkedin.com/in/zoe-m-bryant/',
      'github': 'https://github.com/zoe-jpeg',
      'personalEmail': 'zoemibryant@gmail.com',
    },
  },
];

export const developmentOfficers: Officer[] = [
  {
    image: '/assets/officer/(Indra)jith-Thyagaraja.jpg',
    name: '(Indra)jith Thyagaraja',
    position: 'Nexus Officer',
    level: 1,
    socialLinks: {
      'github': 'https://github.com/Braindeeeaad',
      'personalEmail': 'indrajith2048@gmail.com',
    },
  },
  {
    image: '/assets/officer/Aastha-Sheth.jpg',
    name: 'Aastha Sheth',
    position: 'MeteorMate Officer',
    level: 1,
    socialLinks: {
      'linkedin': 'https://www.linkedin.com/in/aastha-sheth-6533952a1/',
      'github': 'https://github.com/aasthas23',
      'personalEmail': 'aasthamsheth@gmail.com',
    },
  },
  {
    image: '/assets/officer/Alen-Jo.jpg',
    name: 'Alen Jo',
    position: 'SAGE Lead',
    level: 1,
  },
  {
    image: '/assets/officer/Allen-Zheng.jpg',
    name: 'Allen Zheng',
    position: 'ACM Core Officer',
    level: 1,
    socialLinks: {
      'github': 'https://github.com/AllenZheng-05',
      'linkedin': 'https://www.linkedin.com/in/allen-zheng05/',
      'personalEmail': 'allenzhengadmissions@gmail.com',
    },
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'AndresGarcia Sanchez',
    position: 'Sage Officer',
    level: 1,
  },
  {
    image: '/assets/officer/anirudh-vayalali.jpg',
    name: 'anirudh vayalali',
    position: 'Director of Development',
    level: 3,
    socialLinks: {
      'linkedin': 'https://www.linkedin.com/in/anirudh-vayalali',
      'github': 'https://github.com/axdyv',
      'instagram': 'https://instagram.com/andy.v33',
      'personalEmail': 'anirudhvayalali@gmail.com',
    },
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Anusha Patel',
    position: 'Sage Officer',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Arin Sood',
    position: 'Org Portal Lead',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Arnav Vedula',
    position: 'Org Portal Officer',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Atharva Mishra',
    position: 'MeteorMate Officer',
    level: 1,
  },
  {
    image: '/assets/officer/Avery-Brown.jpg',
    name: 'Avery Brown',
    position: 'Org Portal Officer',
    level: 1,
    socialLinks: {
      'linkedin': 'https://www.linkedin.com/in/averybrown808/',
      'github': 'https://github.com/rubytanuki',
      'personalEmail': 'aebrown808@gmail.com',
    },
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Bao Nguyen',
    position: 'SAGE Officer',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Bennett Feigenbaum',
    position: 'ACM Core Officer',
    level: 1,
    socialLinks: {
      'linkedin': 'https://www.linkedin.com/in/bennettfeigenbaum/',
      'github': 'https://github.com/bennettfei',
      'personalEmail': 'bdfeigenbaum005@gmail.com',
    },
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Calvin Tran',
    position: 'BSG Officer',
    level: 1,
  },
  {
    image: '/assets/officer/Christopher-Tran.jpg',
    name: 'Christopher Tran',
    position: 'MeteorMate Officer',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Daniel Nguyen',
    position: 'ACM Core Officer',
    level: 1,
    socialLinks: {
      'linkedin': 'https://www.linkedin.com/in/danielnguyen17',
      'github': 'https://github.com/danielnguywn',
      'personalEmail': 'ddanielnnguyen17@gmail.com',
    },
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Dev Sheth',
    position: 'BSG Officer',
    level: 1,
    socialLinks: {
      'linkedin': 'https://www.linkedin.com/in/devsheth22/',
      'github': 'https://github.com/devsheth05',
      'personalEmail': 'sheth.dev02@gmail.com',
    },
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Ethan Scherwitz',
    position: 'Org Portal Officer',
    level: 1,
  },
  {
    image: '/assets/officer/Frabina-Edwin.jpg',
    name: 'Frabina Edwin',
    position: 'MeteorMate Officer',
    level: 1,
    socialLinks: {
      'linkedin': 'https://www.linkedin.com/in/frabinaedwin/',
      'personalEmail': 'Frabina2016@gmail.com',
    },
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Humza Qureshi',
    position: 'Nexus Officer',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Jaden Kuriakose',
    position: 'SAGE Officer',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Jason Luu',
    position: 'Org Portal Officer',
    level: 1,
  },
  {
    image: '/assets/officer/Jeydin-Pham.jpg',
    name: 'Jeydin Pham',
    position: 'ACM Core Officer',
    level: 3,
    socialLinks: {
      'linkedin': 'https://linkedin.com/in/jeydinpham',
      'github': 'https://github.com/jeydinpham',
      'instagram': 'https://instagram.com/jeydinpham',
      'personalEmail': 'jeydinpham@gmail.com',
    },
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Joel Gurivireddy',
    position: 'MeteorMate Officer',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Justin Truong',
    position: 'Meteormate Officer',
    level: 1,
  },
  {
    image: '/assets/officer/Krish-Joshi.jpg',
    name: 'Krish Joshi',
    position: 'SAGE Officer',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Luke Sultzer',
    position: 'ACM Core Lead',
    level: 3,
    socialLinks: {
      'personalEmail': 'lukesultzer@icloud.com',
      'github': 'https://github.com/LukeSultzer',
    },
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Nachiket Pandit',
    position: 'Org Portal Officer',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Naomi Ntuli',
    position: 'Nexus Officer',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Nathan Sujatno',
    position: 'MeteorMate Officer',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Oscar Lay',
    position: 'SAGE Officer',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Owen Isenhart',
    position: 'BSG Officer',
    level: 1,
    socialLinks: {
      'linkedin': 'https://www.linkedin.com/in/owenisenhart/',
      'github': 'https://github.com/Owen-Isenhart',
      'personalEmail': 'oisenhart.college@gmail.com',
    },
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Prerita Babarjung',
    position: 'Nexus Lead',
    level: 1,
    socialLinks: {
      'linkedin': 'https://www.linkedin.com/in/prerita-babarjung',
    },
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Rei Shibatani',
    position: 'ACM Core Officer',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Riyan Maknojia',
    position: 'BSG Officer',
    level: 1,
    socialLinks: {
      'linkedin': 'https://www.linkedin.com/in/riyan-maknojia/',
      'github': 'https://github.com/RiyanMak',
      'personalEmail': 'riyanmak123@gmail.com',
    },
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Ronak Chavva',
    position: 'BSG Lead',
    level: 1,
  },
  {
    image: '/assets/officer/Ryan-Polasky.jpg',
    name: 'Ryan Polasky',
    position: 'MeteorMate Co-Lead',
    level: 1,
    socialLinks: {
      'linkedin': 'https://linkedin.com/in/ryan-polasky',
      'github': 'https://github.com/ryanpolasky',
      'personalEmail': 'ryanpolasky@hotmail.com',
    },
  },
  {
    image: '/assets/officer/Susan-Zhang.jpg',
    name: 'Susan Zhang',
    position: 'Org Portal Officer',
    level: 1,
    socialLinks: {
      'linkedin': 'https://www.linkedin.com/in/susan-zh4ng/',
      'personalEmail': 'Susan.Zhang901@gmail.com',
    },
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Swayam Arora',
    position: 'SAGE Officer',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Tharun Sevvel',
    position: 'Nexus Officer',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Thomas Le',
    position: 'Nexus Officer',
    level: 1,
  },
  {
    image: '/assets/officer/Tommy-Nguyen.jpg',
    name: 'Tommy Nguyen',
    position: 'Nexus Officer',
    level: 1,
    socialLinks: {
      'linkedin': 'https://linkedin.com/in/tommy-nguyen-ba899423a',
      'github': 'https://github.com/yesmynameisme',
      'personalEmail': 'nguyen424787@gmail.com',
    },
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Vaishnavi Josyula',
    position: 'ACM Core Officer',
    level: 1,
    socialLinks: {
      'linkedin': 'https://www.linkedin.com/in/vaishnavi-josyula/',
      'github': 'https://github.com/abcdefghghwaidsjhbzfk',
      'personalEmail': 'vaishu.josyula@gmail.com',
    },
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Vihan Yerubandi',
    position: 'BSG Officer',
    level: 1,
    socialLinks: {
      'linkedin': 'https://www.linkedin.com/in/vihanyerubandi/',
      'github': 'https://github.com/Youmanvi',
      'personalEmail': 'vihan.yerubandi@gmail.com',
    },
  },
  {
    image: '/assets/officer/Vladislav-Kondratyev.png',
    name: 'Vladislav Kondratyev',
    position: 'MeteorMate Co-Lead',
    level: 1,
    socialLinks: {
      'linkedin': 'https://www.linkedin.com/in/vladislav-kondratyev/',
      'github': 'https://github.com/ch1kim0n1',
      'personalEmail': 'chikimoni61@gmail.com',
    },
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Yash Shah',
    position: 'Development Director',
    level: 2,
    socialLinks: {
      'linkedin': 'https://www.linkedin.com/in/yash-shah-15a704280/',
      'github': 'https://github.com/git-yash',
      'personalEmail': 'yashmittalshah@gmail.com',
    },
  },
];

export const projectsOfficers: Officer[] = [
  {
    image: '/assets/officer/Adarsh-Goura.jpg',
    name: 'Adarsh Goura',
    position: 'Projects Director',
    level: 2,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Enaya Jawed',
    position: 'Project Manager',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Ethan Varghese',
    position: 'Project Mentor',
    level: 1,
  },
  {
    image: '/assets/officer/Jazmin-Gutierrez.png',
    name: 'Jazmin Gutierrez',
    position: 'Project Manager',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Kanchan Javalkar',
    position: 'Projects Advisor',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Mathew Biji',
    position: 'Project Manager',
    level: 1,
  },
  {
    image: '/assets/officer/Mohammad-Mehrab.jpg',
    name: 'Mohammad Mehrab',
    position: 'Project Manager',
    level: 1,
    socialLinks: {
      'linkedin': 'https://linkedin.com/in/mohammadmehrab',
      'github': 'https://github.com/mohammadmehrab',
      'personalEmail': 'mohammadmehrab@outlook.com',
    },
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Noel Emmanuel',
    position: 'Project Manager',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Ram Gudur',
    position: 'Project Manager',
    level: 1,
    socialLinks: {
      'linkedin': 'https://www.linkedin.com/in/ramgudur',
      'personalEmail': 'ramgudur27@gmail.com',
    },
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Shreya Ramani',
    position: 'Project Mentor',
    level: 1,
  },
  {
    image: '/assets/officer/Suhani-Rana.jpg',
    name: 'Suhani Rana',
    position: 'Projects Director',
    level: 2,
    socialLinks: {
      'linkedin': 'https://www.linkedin.com/in/rsuhani',
      'github': 'https://github.com/srana3',
      'personalEmail': 'suhanirana19@gmail.com',
    },
  },
  {
    image: '/assets/officer/Sunay-Shehaan.jpg',
    name: 'Sunay Shehaan',
    position: 'Project Manager',
    level: 1,
    socialLinks: {
      'linkedin': 'https://www.linkedin.com/in/sunayshehaan/',
      'github': 'https://github.com/Blizzyboii',
      'personalEmail': 'shehaan.sunay@gmail.com',
    },
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Tammy Khurana',
    position: 'Project Manager',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Tramanh Trinh',
    position: 'Project Manager',
    level: 1,
  },
];

export const educationOfficers: Officer[] = [
  {
    image: '/assets/OfficerImage.png',
    name: 'Aashay Vishwakarma',
    position: 'TIP Director',
    level: 2,
    socialLinks: {
      'linkedin': 'https://www.linkedin.com/in/aashayvishwakarma/',
      'personalEmail': 'aashay.vkarma@gmail.com',
    },
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Aiman Ahsan',
    position: 'MP Offcier',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Ajay Alluri',
    position: 'TIP Lead',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Ayush Shivhare',
    position: 'MP Officer',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Bopin Sai',
    position: 'TIP Lead',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Hannah Van',
    position: 'Mentor Program Director',
    level: 2,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Lalith Vennapusa',
    position: 'TIP Officer',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Nadeeba Atiqui',
    position: 'TIP Lead',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Neeharika D',
    position: 'MP Officer',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Ram Gudur',
    position: 'TIP Officer',
    level: 1,
    socialLinks: {
      'linkedin': 'https://www.linkedin.com/in/ramgudur',
      'personalEmail': 'ramgudur27@gmail.com',
    },
  },
  {
    image: '/assets/officer/Rodolfo-Gonzalez.jpg',
    name: 'Rodolfo Gonzalez',
    position: 'TIP Officer',
    level: 1,
    socialLinks: {
      'linkedin': 'https://www.linkedin.com/in/rjgx/',
      'github': 'https://github.com/rudyg16',
      'personalEmail': 'rudygon822@gmail.com',
    },
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Roha Fatima',
    position: 'MP Officer',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Tanishq Akasapu',
    position: 'Mentor Program Officer',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Zeke Stephens',
    position: 'TIP Lead',
    level: 1,
    socialLinks: {
      'personalEmail': 'zeke@zekestephens.com',
    },
  },
];

export const communityOfficers: Officer[] = [
  {
    image: '/assets/OfficerImage.png',
    name: 'Advay Chandramouli',
    position: 'Outreach officer',
    level: 1,
    socialLinks: {
      'linkedin': 'https://linkedin.com/in/advaychandramouli',
      'github': 'https://github.com/AdvayChandramouli',
      'personalEmail': 'advaycmouli@gmail.com',
    },
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Ali Ghorbani',
    position: 'Outreach Officer',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Amritha Kasturi',
    position: 'Events Officer',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Anusha Patel',
    position: 'Campus Director',
    level: 2,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Dana Ibrahim',
    position: 'Outreach officer',
    level: 1,
  },
  {
    image: '/assets/officer/Frabina-Edwin.jpg',
    name: 'Frabina Edwin',
    position: 'Archives Lead',
    level: 1,
    socialLinks: {
      'linkedin': 'https://www.linkedin.com/in/frabinaedwin/',
      'personalEmail': 'Frabina2016@gmail.com',
    },
  },
  {
    image: '/assets/officer/Gerardo-Martinez.jpg',
    name: 'Gerardo Martinez',
    position: 'Outreach officer',
    level: 1,
    socialLinks: {
      'linkedin': 'https://www.linkedin.com/in/gerardo-martinez1/',
      'github': 'https://github.com/F0rge0',
    },
  },
  {
    image: '/assets/officer/Hannah-Rauch.jpg',
    name: 'Hannah Rauch',
    position: 'Outreach Officer',
    level: 1,
    socialLinks: {
      'linkedin': 'https://www.linkedin.com/in/hannaherauch',
    },
  },
  {
    image: '/assets/officer/Joseph-Botros.jpg',
    name: 'Joseph Botros',
    position: 'Events Officer',
    level: 1,
    socialLinks: {
      'linkedin': 'https://linkedin.com/in/j-botros',
      'personalEmail': 'josephbotros04@gmail.com',
    },
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Kaushik Shivakumar',
    position: 'Outreach officer',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Kavyadharshini Seenuvasan',
    position: 'Archives Officer',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Mayowa Akinyede',
    position: 'Events Officer',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Mohammed Gaggutur',
    position: 'Events Officer',
    level: 1,
  },
  {
    image: '/assets/officer/Nguy-Bich.jpg',
    name: 'Nguy Bich',
    position: 'Archives Officer',
    level: 1,
    socialLinks: {
      'linkedin': 'https://www.linkedin.com/in/b%C3%ADch-ng%E1%BB%8Dc-tr%E1%BA%A7n-ngu%E1%BB%B5-36753b362?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      'personalEmail': 'btrannguy@gmail.com',
    },
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Nidhi Majoju',
    position: 'Outreach officer',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Pratishtha Rao',
    position: 'Events Officer',
    level: 1,
  },
  {
    image: '/assets/officer/Ryan-Edward.jpg',
    name: 'Ryan Edward',
    position: 'Events Officer',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Sam Pokharel',
    position: 'Events Officer',
    level: 1,
  },
  {
    image: '/assets/officer/Sameeraa-Kandalgaonkar.jpg',
    name: 'Sameeraa Kandalgaonkar',
    position: 'Archives Officer',
    level: 1,
    socialLinks: {
      'linkedin': 'https://www.linkedin.com/in/sameeraakan118/',
      'github': 'https://github.com/SameeraaGKan',
      'personalEmail': 'sameeraagk883@gmail.com',
    },
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Sarah Jacob',
    position: 'Archives Officer',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Sebastian Martinez',
    position: 'Archives Officer',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Shreya Singaravel',
    position: 'Outreach officer',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Shriya Kalyan',
    position: 'Archives Officer',
    level: 1,
    socialLinks: {
      'linkedin': 'https://www.linkedin.com/in/shriya77/',
      'github': 'https://github.com/shriya77',
      'personalEmail': 'shriyakkx@gmail.com',
    },
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Sudiksa Dineshkumar',
    position: 'Events Officer',
    level: 1,
    socialLinks: {
      'linkedin': 'https://www.linkedin.com/in/sudiksadineshkumardatascience/',
      'personalEmail': 'sudiksad23@gmail.com',
    },
  },
  {
    image: '/assets/officer/Suhani-Rana.jpg',
    name: 'Suhani Rana',
    position: 'Outreach Coordinator',
    level: 1,
    socialLinks: {
      'linkedin': 'https://www.linkedin.com/in/rsuhani',
      'github': 'https://github.com/srana3',
      'personalEmail': 'suhanirana19@gmail.com',
    },
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Syed Kazmi',
    position: 'Events Officer',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Tammy Khurana',
    position: 'Archives Officer',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Tulasi Janjanam',
    position: 'Outreach Officer',
    level: 1,
    socialLinks: {
      'linkedin': 'https://www.linkedin.com/in/tulasi-janjanam123/',
    },
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Tvisha Doshi',
    position: 'Outreach Officer',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Varsha Shashishekar',
    position: 'Events Officers',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Varun Bhupathiraju',
    position: 'Events Officer',
    level: 1,
  },
  {
    image: '/assets/officer/Vyshnav-Vijish.png',
    name: 'Vyshnav Vijish',
    position: 'Director of Outreach',
    level: 2,
    socialLinks: {
      'linkedin': 'https://www.linkedin.com/in/vyshnav-vijish-aba4b9269/',
    },
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Zoya Syed',
    position: 'Archives Officer',
    level: 1,
  },
];

export const hackOfficers: Officer[] = [
  {
    image: '/assets/OfficerImage.png',
    name: 'Aatish Bommisetty',
    position: 'Finance Director',
    level: 2,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Aayushi Hansalia',
    position: 'Logistics Coordinator',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Akash Dasarraju',
    position: 'Experience Coordinator',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Alan Roybal',
    position: 'HackUTD Director',
    level: 2,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Andrea Alvidres',
    position: 'Marketing Coordinator',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Anish Alle',
    position: 'Tech Coordinator',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Ann Jayan',
    position: 'Marketing Coordinator',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Arnav Vedula',
    position: 'Technology Coordinator',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Caleb Bae',
    position: 'Tech Lead',
    level: 1,
    socialLinks: {
      'linkedin': 'https://linkedin.com/in/baecal000',
      'github': 'https://github.com/balebbae',
      'personalEmail': 'baecal000@gmail.com',
    },
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Danish Ejaz',
    position: 'Marketing Coordinator',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Dhivyesh Prithiviraj',
    position: 'Marketing Lead',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Ishita Saran',
    position: 'Industry Coordinator',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Jagadeep Kalluri',
    position: 'Tech Coordinator',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Joel Philipose',
    position: 'Logistics Coordinator',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Jordan Joelson',
    position: 'Marketing Coordinator',
    level: 1,
    socialLinks: {
      'linkedin': 'https://www.linkedin.com/in/jordanjoelson/',
      'personalEmail': 'jordan@jordanjoelson.com',
    },
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Kavin Sankar',
    position: 'Industry Officer',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Kaysan Amin',
    position: 'Logistics Coordinator',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Keane Ferdinand',
    position: 'Experience Officer',
    level: 1,
    socialLinks: {
      'linkedin': 'https://www.linkedin.com/in/keane-ferdinand-548844310/',
      'github': 'https://github.com/BobFett3185',
      'personalEmail': 'keaneferdinand82@gmail.com',
    },
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Liana Forster',
    position: 'Experience Lead',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Monish Mehta',
    position: 'Industry Coordinator',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Nandini Paidesetty',
    position: 'Industry Coordinator',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Nirmal Shah',
    position: 'Logistics Coordinator',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Noel Varghese',
    position: 'Tech Coordinator',
    level: 1,
    socialLinks: {
      'linkedin': 'https://www.linkedin.com/in/noel-varghese-swe/',
      'github': 'https://github.com/NoelVarghese2006',
      'personalEmail': 'noelvarghese2006@gmail.com',
    },
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Reiki Hingorani',
    position: 'HackUTD Experience Coordinator',
    level: 1,
    socialLinks: {
      'linkedin': 'https://www.linkedin.com/in/reikihingorani',
      'personalEmail': 'reikihingorani@gmail.com',
    },
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Sachi Hansalia',
    position: 'Industry Lead',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Sahas Sharma',
    position: 'Industry Officer',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Santiago Islas',
    position: 'Marketing Coordinator',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Sarah Khan',
    position: 'Marketing Coordinator',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Saran Jacob',
    position: 'Marketing Officer',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Sheryl Gerald',
    position: 'Industry Coordinator',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Shiloh Asir',
    position: 'Marketing Officer',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Shobana Ravi',
    position: 'Logistics Officer',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Sofia Thomas',
    position: 'Logistics Lead',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Sreevasan Sivasubramanian',
    position: 'Tech Officer',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Sristi Srinivasan',
    position: 'Marketing Officer',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Tien Phan',
    position: 'Experience Officer',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Veer Shah',
    position: 'HackUTD Director',
    level: 2,
  },
];

export const industryOfficers: Officer[] = [
  {
    image: '/assets/OfficerImage.png',
    name: 'Anika Guin',
    position: 'Industry Director',
    level: 2,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Anush Gudapuri',
    position: 'Finance Officer',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Arnav Vedula',
    position: 'Finance Officer',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Logan Margabandu',
    position: 'Finance Officer',
    level: 1,
  },
  {
    image: '/assets/officer/Michael-Hellman.jpg',
    name: 'Michael Hellman',
    position: 'Industry Officer',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Nidhi Parvathala',
    position: 'Industry Officer',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Nihita Soma',
    position: 'Industry Director',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Pratishtha Rao',
    position: 'Industry Officer',
    level: 1,
  },
  {
    image: '/assets/officer/Rishi-Golla.jpg',
    name: 'Rishi Golla',
    position: 'Industry Officer',
    level: 1,
    socialLinks: {
      'linkedin': 'https://www.linkedin.com/in/rishi-golla/',
      'github': 'https://github.com/rishi-golla',
      'personalEmail': 'rishigolla.123@gmail.com',
    },
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Soujanya Kamalapur',
    position: 'Industry Officer',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Varun Bhupathiraju',
    position: 'Industry Officer',
    level: 1,
  },
];

export const financeOfficers: Officer[] = [
];

export const boardOfficers: Officer[] = [
  {
    image: '/assets/OfficerImage.png',
    name: 'Aashay Vishwakarma',
    position: 'TIP Director',
    level: 2,
    socialLinks: {
      'linkedin': 'https://www.linkedin.com/in/aashayvishwakarma/',
      'personalEmail': 'aashay.vkarma@gmail.com',
    },
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Aatish Bommisetty',
    position: 'Finance Director',
    level: 2,
  },
  {
    image: '/assets/officer/Adarsh-Goura.jpg',
    name: 'Adarsh Goura',
    position: 'Projects Director',
    level: 2,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Alan Roybal',
    position: 'HackUTD Director',
    level: 2,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Anika Guin',
    position: 'Industry Director',
    level: 2,
  },
  {
    image: '/assets/officer/anirudh-vayalali.jpg',
    name: 'anirudh vayalali',
    position: 'Director of Development',
    level: 3,
    socialLinks: {
      'linkedin': 'https://www.linkedin.com/in/anirudh-vayalali',
      'github': 'https://github.com/axdyv',
      'instagram': 'https://instagram.com/andy.v33',
      'personalEmail': 'anirudhvayalali@gmail.com',
    },
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Anusha Patel',
    position: 'Campus Director',
    level: 2,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Anvi Sidda',
    position: 'Media Co-director',
    level: 2,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Elijah Walker',
    position: 'ACM President',
    level: 3,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Hannah Van',
    position: 'Mentor Program Director',
    level: 2,
  },
  {
    image: '/assets/officer/Hiba-Mubeen.jpg',
    name: 'Hiba Mubeen',
    position: 'ACM Vice President',
    level: 3,
    socialLinks: {
      'linkedin': 'https://www.linkedin.com/in/hiba-mubeen',
      'github': 'https://github.com/hibamubeen',
      'personalEmail': 'hiba.mubeen7@gmail.com',
    },
  },
  {
    image: '/assets/officer/Jeydin-Pham.jpg',
    name: 'Jeydin Pham',
    position: 'ACM Core Officer',
    level: 3,
    socialLinks: {
      'linkedin': 'https://linkedin.com/in/jeydinpham',
      'github': 'https://github.com/jeydinpham',
      'instagram': 'https://instagram.com/jeydinpham',
      'personalEmail': 'jeydinpham@gmail.com',
    },
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Luke Sultzer',
    position: 'ACM Core Lead',
    level: 3,
    socialLinks: {
      'personalEmail': 'lukesultzer@icloud.com',
      'github': 'https://github.com/LukeSultzer',
    },
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Mercedes Xiong',
    position: 'ACM Vice President',
    level: 3,
    socialLinks: {
      'linkedin': 'https://www.linkedin.com/in/mercedes-xiong/',
      'github': 'https://github.com/MercedesX3',
      'personalEmail': 'mxiong935@gmail.com',
    },
  },
  {
    image: '/assets/officer/Priti-See.jpg',
    name: 'Priti See',
    position: 'Research Director',
    level: 2,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Purva Patel',
    position: 'Research Director',
    level: 2,
    socialLinks: {
      'linkedin': 'https://www.linkedin.com/in/purvajpatel/',
      'github': 'http://github.com/purvajpatel/',
      'personalEmail': 'purva.patel@utdallas.edu',
    },
  },
  {
    image: '/assets/officer/Sneha-Maram.jpg',
    name: 'Sneha Maram',
    position: 'Media Director',
    level: 2,
  },
  {
    image: '/assets/officer/Suhani-Rana.jpg',
    name: 'Suhani Rana',
    position: 'Projects Director',
    level: 2,
    socialLinks: {
      'linkedin': 'https://www.linkedin.com/in/rsuhani',
      'github': 'https://github.com/srana3',
      'personalEmail': 'suhanirana19@gmail.com',
    },
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Veer Shah',
    position: 'HackUTD Director',
    level: 2,
  },
  {
    image: '/assets/officer/Vyshnav-Vijish.png',
    name: 'Vyshnav Vijish',
    position: 'Director of Outreach',
    level: 2,
    socialLinks: {
      'linkedin': 'https://www.linkedin.com/in/vyshnav-vijish-aba4b9269/',
    },
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Yash Shah',
    position: 'Development Director',
    level: 2,
    socialLinks: {
      'linkedin': 'https://www.linkedin.com/in/yash-shah-15a704280/',
      'github': 'https://github.com/git-yash',
      'personalEmail': 'yashmittalshah@gmail.com',
    },
  },
];

type Divisions =
  | 'advisor'
  | 'executive'
  | 'media'
  | 'research'
  | 'development'
  | 'projects'
  | 'education'
  | 'community'
  | 'hackutd'
  | 'industry'
  | 'finance'
  | 'board'
;

export const divisionOfficerMap: Record<Divisions, Officer[]> = {
  advisor: advisorOfficers,
  executive: executiveOfficers,
  media: mediaOfficers,
  research: researchOfficers,
  development: developmentOfficers,
  projects: projectsOfficers,
  education: educationOfficers,
  community: communityOfficers,
  hackutd: hackOfficers,
  industry: industryOfficers,
  finance: financeOfficers,
  board: boardOfficers,
};