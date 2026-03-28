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
    image: '/assets/officer/Elijah-Walker.jpg',
    name: 'Elijah Walker',
    position: 'ACM President',
    level: 3,
    socialLinks: {
      'linkedin': 'https://linkedin.com/in/elijahtruthwalker',
      'github': 'https://github.com/elijahtwalker',
    },
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
    image: '/assets/officer/Mercedes-Xiong.jpg',
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
    image: '/assets/officer/Anvi-Sidda.jpg',
    name: 'Anvi Sidda',
    position: 'Media Director (Marketing)',
    level: 2,
  },
  {
    image: '/assets/officer/Sneha-Maram.jpg',
    name: 'Sneha Maram',
    position: 'Media Director (Design)',
    level: 2,
  },
  {
    image: '/assets/officer/Akshat-Chauhan.jpg',
    name: 'Akshat Chauhan',
    position: 'Marketing Officer',
    level: 1,
  },
  {
    image: '/assets/officer/Alishba-Jafri.jpg',
    name: 'Alishba Jafri',
    position: 'Marketing Officer',
    level: 1,
  },
  {
    image: '/assets/officer/Batrisyia-Nablan.jpg',
    name: 'Batrisyia Nablan',
    position: 'Design Officer',
    level: 1,
  },
  {
    image: '/assets/officer/Damian-Izaguirre.jpg',
    name: 'Damian Izaguirre',
    position: 'Design Officer',
    level: 1,
  },
  {
    image: '/assets/officer/Dax-Dwelle.jpg',
    name: 'Dax Dwelle',
    position: 'Marketing Officer',
    level: 1,
  },
  {
    image: '/assets/officer/Eshi-Punuganti.jpg',
    name: 'Eshi Punuganti',
    position: 'Hybrid Officer',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Prabhas Gade',
    position: 'Marketing Officer',
    level: 1,
    socialLinks: {
      'linkedin': 'https://linkedin.com/in/prabhasgade',
      'github': 'https://github.com/PrabhasG550',
      'instagram': 'https://instagram.com/Prabhasgade',
    },
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Rasika Chaudhari',
    position: 'Marketing Officer',
    level: 1,
  },
  {
    image: '/assets/officer/Rohan-Cheruku.jpg',
    name: 'Rohan Cheruku',
    position: 'Design Officer',
    level: 1,
  },
  {
    image: '/assets/officer/Sai Varun-Mallela.jpg',
    name: 'Sai Varun Mallela',
    position: 'Marketing Officer',
    level: 1,
  },
  {
    image: '/assets/officer/Sandra-Luo.jpg',
    name: 'Sandra Luo',
    position: 'Design Officer',
    level: 1,
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
    image: '/assets/officer/Priti-See.jpg',
    name: 'Priti See',
    position: 'Research Director',
    level: 2,
  },
  {
    image: '/assets/officer/Purva-Patel.jpg',
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
    image: '/assets/officer/Abhijith-Utla.jpg',
    name: 'Abhijith Utla',
    position: 'Research Lead',
    level: 1,
  },
  {
    image: '/assets/officer/Alex-Miller.jpg',
    name: 'Alex Miller',
    position: 'Research Lead',
    level: 1,
  },
  {
    image: '/assets/officer/Deeksha-Bandi.jpg',
    name: 'Deeksha Bandi',
    position: 'Research Lead',
    level: 1,
  },
  {
    image: '/assets/officer/Mahd-Malik.jpg',
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
    image: '/assets/officer/Nathan-Han.jpg',
    name: 'Nathan Han',
    position: 'Research Lead',
    level: 1,
  },
  {
    image: '/assets/officer/Nidhi-Majoju.jpg',
    name: 'Nidhi Majoju',
    position: 'Research Lead',
    level: 1,
  },
  {
    image: '/assets/officer/Quan-Do.jpg',
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
    image: '/assets/officer/Sai-Chauhan.jpg',
    name: 'Sai Chauhan',
    position: 'Research Lead',
    level: 1,
  },
  {
    image: '/assets/officer/Shreyaj-Padigala.jpg',
    name: 'Shreyaj Padigala',
    position: 'Research Lead',
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
    image: '/assets/officer/Zoë-Bryant.jpg',
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
  // Directors
  {
    image: '/assets/officer/Anirudh-Vayalali.jpg',
    name: 'Anirudh Vayalali',
    position: 'Development Director',
    level: 2,
    socialLinks: {
      'linkedin': 'https://www.linkedin.com/in/anirudh-vayalali',
      'github': 'https://github.com/axdyv',
      'instagram': 'https://instagram.com/andy.v33',
      'personalEmail': 'anirudhvayalali@gmail.com',
    },
  },
  {
    image: '/assets/officer/Yash-Shah.jpg',
    name: 'Yash Shah',
    position: 'Development Director',
    level: 2,
    socialLinks: {
      'linkedin': 'https://www.linkedin.com/in/yash-shah-15a704280/',
      'github': 'https://github.com/git-yash',
      'personalEmail': 'yashmittalshah@gmail.com',
    },
  },

  // ACM Core
  {
    image: '/assets/officer/Luke-Sultzer.jpg',
    name: 'Luke Sultzer',
    position: 'ACM Core Lead',
    level: 1,
    socialLinks: {
      'personalEmail': 'lukesultzer@icloud.com',
      'github': 'https://github.com/LukeSultzer',
    },
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
    image: '/assets/officer/Bennett-Feigenbaum.jpg',
    name: 'Bennett Feigenbaum',
    position: 'ACM Core Officer',
    level: 1,
    socialLinks: {
      'linkedin': 'https://linkedin.com/in/bennettfeigenbaum',
      'github': 'https://github.com/bennettfei',
      'instagram': 'https://instagram.com/bennettfeigenbaum',
      'personalEmail': 'bdfeigenbaum005@gmail.com',
    },
  },
  {
    image: '/assets/officer/Daniel-Nguyen.jpg',
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
    image: '/assets/officer/Jeydin-Pham.jpg',
    name: 'Jeydin Pham',
    position: 'ACM Core Officer',
    level: 1,
    socialLinks: {
      'linkedin': 'https://linkedin.com/in/jeydinpham',
      'github': 'https://github.com/jeydinpham',
      'instagram': 'https://instagram.com/jeydinpham',
      'personalEmail': 'jeydinpham@gmail.com',
    },
  },
  {
    image: '/assets/officer/Rei-Shibatani.jpg',
    name: 'Rei Shibatani',
    position: 'ACM Core Officer',
    level: 1,
    socialLinks: {
      'linkedin': 'https://linkedin.com/in/rei-shibatani-321017335',
      'github': 'https://github.com/reiiiiiiiiii',
    },
  },
  {
    image: '/assets/officer/Vaishnavi-Josyula.jpg',
    name: 'Vaishnavi Josyula',
    position: 'ACM Core Officer',
    level: 1,
    socialLinks: {
      'linkedin': 'https://www.linkedin.com/in/vaishnavi-josyula/',
      'github': 'https://github.com/abcdefghghwaidsjhbzfk',
      'personalEmail': 'vaishu.josyula@gmail.com',
    },
  },

  // SAGE
  {
    image: '/assets/officer/Alen-Jo.jpg',
    name: 'Alen Jo',
    position: 'SAGE Lead',
    level: 1,
  },
  {
    image: '/assets/officer/Andres Garcia-Sanchez.jpg',
    name: 'Andres Garcia Sanchez',
    position: 'Sage Officer',
    level: 1,
  },
  {
    image: '/assets/officer/Anusha-Patel.png',
    name: 'Anusha Patel',
    position: 'SAGE Officer',
    level: 1,
  },
  {
    image: '/assets/officer/Bao-Nguyen.jpg',
    name: 'Bao Nguyen',
    position: 'SAGE Officer',
    level: 1,
  },
  {
    image: '/assets/officer/Krish-Joshi.jpg',
    name: 'Krish Joshi',
    position: 'SAGE Officer',
    level: 1,
  },
  {
    image: '/assets/officer/Oscar-Lay.jpg',
    name: 'Oscar Lay',
    position: 'SAGE Officer',
    level: 1,
  },
  {
    image: '/assets/officer/Swayam-Arora.jpg',
    name: 'Swayam Arora',
    position: 'SAGE Officer',
    level: 1,
  },

  // Org Portal
  {
    image: '/assets/officer/Arin-Sood.jpg',
    name: 'Arin Sood',
    position: 'Org Portal Lead',
    level: 1,
  },
  {
    image: '/assets/officer/Arnav-Vedula.jpg',
    name: 'Arnav Vedula',
    position: 'Org Portal Officer',
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
    image: '/assets/officer/Ethan-Scherwitz.jpg',
    name: 'Ethan Scherwitz',
    position: 'Org Portal Officer',
    level: 1,
  },
  {
    image: '/assets/officer/Nachiket-Pandit.jpg',
    name: 'Nachiket Pandit',
    position: 'Org Portal Officer',
    level: 1,
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

  // MeteorMate
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
    image: '/assets/officer/Vladislav-Kondratyev.jpg',
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
    image: '/assets/officer/Atharva-Mishra.jpg',
    name: 'Atharva Mishra',
    position: 'MeteorMate Officer',
    level: 1,
  },
  {
    image: '/assets/officer/Christopher-Tran.jpg',
    name: 'Christopher Tran',
    position: 'MeteorMate Officer',
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
    name: 'Joel Gurivireddy',
    position: 'MeteorMate Officer',
    level: 1,
  },
  {
    image: '/assets/officer/Justin-Truong.jpg',
    name: 'Justin Truong',
    position: 'MeteorMate Officer',
    level: 1,
  },
  {
    image: '/assets/officer/Nathan-Sujatno.jpg',
    name: 'Nathan Sujatno',
    position: 'MeteorMate Officer',
    level: 1,
  },

  // BSG
  {
    image: '/assets/officer/Ronak-Chavva.jpg',
    name: 'Ronak Chavva',
    position: 'BSG Lead',
    level: 1,
  },
  {
    image: '/assets/officer/Calvin-Tran.jpg',
    name: 'Calvin Tran',
    position: 'BSG Officer',
    level: 1,
  },
  {
    image: '/assets/officer/Dev-Sheth.jpg',
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
    image: '/assets/officer/Owen-Isenhart.jpg',
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
    image: '/assets/officer/Riyan-Maknojia.jpg',
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
    image: '/assets/officer/Vihan-Yerubandi.jpg',
    name: 'Vihan Yerubandi',
    position: 'BSG Officer',
    level: 1,
    socialLinks: {
      'linkedin': 'https://www.linkedin.com/in/vihanyerubandi/',
      'github': 'https://github.com/Youmanvi',
      'personalEmail': 'vihan.yerubandi@gmail.com',
    },
  },

  // Nexus
  {
    image: '/assets/officer/Prerita-Babarjung.jpg',
    name: 'Prerita Babarjung',
    position: 'Nexus Lead',
    level: 1,
    socialLinks: {
      'linkedin': 'https://www.linkedin.com/in/prerita-babarjung',
    },
  },
  {
    image: '/assets/officer/Humza-Qureshi.jpg',
    name: 'Humza Qureshi',
    position: 'Nexus Officer',
    level: 1,
  },
  {
    image: '/assets/officer/Naomi-Ntuli.jpg',
    name: 'Naomi Ntuli',
    position: 'Nexus Officer',
    level: 1,
  },
  {
    image: '/assets/officer/Tharun-Sevvel.jpg',
    name: 'Tharun Sevvel',
    position: 'Nexus Officer',
    level: 1,
  },
  {
    image: '/assets/officer/Thomas-Le.jpg',
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
];

export const projectsOfficers: Officer[] = [
  {
    image: '/assets/officer/Adarsh-Goura.jpg',
    name: 'Adarsh Goura',
    position: 'Projects Director',
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
    image: '/assets/officer/Enaya-Jawed.jpg',
    name: 'Enaya Jawed',
    position: 'Project Manager',
    level: 1,
  },
  {
    image: '/assets/officer/Ethan-Varghese.jpg',
    name: 'Ethan Varghese',
    position: 'Project Manager',
    level: 1,
  },
  {
    image: '/assets/officer/Jazmin-Gutierrez.jpg',
    name: 'Jazmin Gutierrez',
    position: 'Project Manager',
    level: 1,
  },
  {
    image: '/assets/officer/Kanchan-Javalkar.jpg',
    name: 'Kanchan Javalkar',
    position: 'Projects Advisor',
    level: 1,
  },
  {
    image: '/assets/officer/Mathew-Biji.jpg',
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
    image: '/assets/officer/Noel-Emmanuel.jpg',
    name: 'Noel Emmanuel',
    position: 'Project Manager',
    level: 1,
  },
  {
    image: '/assets/officer/Ram-Gudur.jpg',
    name: 'Ram Gudur',
    position: 'Project Manager',
    level: 1,
    socialLinks: {
      'linkedin': 'https://www.linkedin.com/in/ramgudur',
      'personalEmail': 'ramgudur27@gmail.com',
    },
  },
  {
    image: '/assets/officer/Shreya-Ramani.jpg',
    name: 'Shreya Ramani',
    position: 'Project Manager',
    level: 1,
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
    image: '/assets/officer/Tammy-Khurana.jpg',
    name: 'Tammy Khurana',
    position: 'Project Manager',
    level: 1,
  },
  {
    image: '/assets/officer/Tramanh-Trinh.jpg',
    name: 'Tramanh Trinh',
    position: 'Project Manager',
    level: 1,
  },
];

export const educationOfficers: Officer[] = [
  {
    image: '/assets/officer/Aashay-Vishwakarma.jpg',
    name: 'Aashay Vishwakarma',
    position: 'Education Director (TIP)',
    level: 2,
    socialLinks: {
      'linkedin': 'https://linkedin.com/in/https://www.linkedin.com/in/aashayvishwakarma/',
      'github': 'https://github.com/aashayvishwakarma',
      'instagram': 'https://instagram.com/aashayvishwakarma',
      'personalEmail': 'aashay.vkarma@gmail.com',
    },
  },
  {
    image: '/assets/officer/Hannah-Van.jpg',
    name: 'Hannah Van',
    position: 'Education Director (Mentor Program)',
    level: 2,
  },
  {
    image: '/assets/officer/Ajay-Alluri.jpg',
    name: 'Ajay Alluri',
    position: 'TIP Lead',
    level: 1,
  },
  {
    image: '/assets/officer/Bopin-Sai.jpg',
    name: 'Bopin Sai',
    position: 'TIP Lead',
    level: 1,
  },
  {
    image: '/assets/officer/Nadeeba-Atiqui.jpg',
    name: 'Nadeeba Atiqui',
    position: 'TIP Lead',
    level: 1,
  },
  {
    image: '/assets/officer/Zeke-Stephens.jpg',
    name: 'Zeke Stephens',
    position: 'TIP Lead',
    level: 1,
    socialLinks: {
      'personalEmail': 'zeke@zekestephens.com',
    },
  },
  {
    image: '/assets/officer/Lalith-Vennapusa.jpg',
    name: 'Lalith Vennapusa',
    position: 'TIP Officer',
    level: 1,
  },
  {
    image: '/assets/officer/Ram-Gudur.jpg',
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
    image: '/assets/officer/Aiman-Ahsan.jpg',
    name: 'Aiman Ahsan',
    position: 'Mentor Program Officer',
    level: 1,
  },
  {
    image: '/assets/officer/Ayush-Shivhare.jpg',
    name: 'Ayush Shivhare',
    position: 'Mentor Program Officer',
    level: 1,
  },
  {
    image: '/assets/officer/Neeharika-Dasaraju.jpg',
    name: 'Neeharika Dasaraju',
    position: 'Mentor Program Officer',
    level: 1,
  },
  {
    image: '/assets/officer/Roha-Fatima.jpg',
    name: 'Roha Fatima',
    position: 'Mentor Program Officer',
    level: 1,
  },
  {
    image: '/assets/officer/Tanishq-Akasapu.jpg',
    name: 'Tanishq Akasapu',
    position: 'Mentor Program Officer',
    level: 1,
  },
];

export const communityOfficers: Officer[] = [
  {
    image: '/assets/officer/Anusha-Patel.png',
    name: 'Anusha Patel',
    position: 'Community Director (Campus)',
    level: 2,
  },
  {
    image: '/assets/officer/Vyshnav-Vijish.jpg',
    name: 'Vyshnav Vijish',
    position: 'Community Director (Outreach)',
    level: 2,
    socialLinks: {
      'linkedin': 'https://www.linkedin.com/in/vyshnav-vijish-aba4b9269/',
    },
  },
  {
    image: '/assets/officer/Advay-Chandramouli.jpg',
    name: 'Advay Chandramouli',
    position: 'Outreach Officer',
    level: 1,
    socialLinks: {
      'linkedin': 'https://linkedin.com/in/advaychandramouli',
      'github': 'https://github.com/AdvayChandramouli',
      'personalEmail': 'advaycmouli@gmail.com',
    },
  },
  {
    image: '/assets/officer/Ali-Ghorbani.jpg',
    name: 'Ali Ghorbani',
    position: 'Outreach Officer',
    level: 1,
  },
  {
    image: '/assets/officer/Amritha-Kasturi.jpg',
    name: 'Amritha Kasturi',
    position: 'Events Officer',
    level: 1,
  },
  {
    image: '/assets/officer/Dana-Ibrahim.jpg',
    name: 'Dana Ibrahim',
    position: 'Outreach Officer',
    level: 1,
  },
  {
    image: '/assets/OfficerImage.png',
    name: 'Emmalyn Ramirez',
    position: 'Archives Officer',
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
    position: 'Outreach Officer',
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
    image: '/assets/officer/Kaushik-Shivakumar.jpg',
    name: 'Kaushik Shivakumar',
    position: 'Outreach Officer',
    level: 1,
  },
  {
    image: '/assets/officer/Kavyadharshini-Seenuvasan.jpg',
    name: 'Kavyadharshini Seenuvasan',
    position: 'Archives Officer',
    level: 1,
  },
  {
    image: '/assets/officer/Mayowa-Akinyede.jpg',
    name: 'Mayowa Akinyede',
    position: 'Events Officer',
    level: 1,
  },
  {
    image: '/assets/officer/Mohammed-Gaggutur.jpg',
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
    image: '/assets/officer/Nidhi-Majoju.jpg',
    name: 'Nidhi Majoju',
    position: 'Outreach Officer',
    level: 1,
  },
  {
    image: '/assets/officer/Pratishtha-Rao.jpg',
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
    image: '/assets/officer/Sam-Pokharel.jpg',
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
    image: '/assets/officer/Sarah-Jacob.jpg',
    name: 'Sarah Jacob',
    position: 'Archives Officer',
    level: 1,
  },
  {
    image: '/assets/officer/Sebastian-Martinez.jpg',
    name: 'Sebastian Martinez',
    position: 'Archives Officer',
    level: 1,
  },
  {
    image: '/assets/officer/Shreya-Singaravel.jpg',
    name: 'Shreya Singaravel',
    position: 'Outreach Officer',
    level: 1,
  },
  {
    image: '/assets/officer/Sudiksa-Dineshkumar.jpg',
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
    image: '/assets/officer/Syed-Kazmi.jpg',
    name: 'Syed Kazmi',
    position: 'Events Officer',
    level: 1,
  },
  {
    image: '/assets/officer/Tammy-Khurana.jpg',
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
    image: '/assets/officer/Tvisha-Doshi.jpg',
    name: 'Tvisha Doshi',
    position: 'Outreach Officer',
    level: 1,
  },
  {
    image: '/assets/officer/Varsha-Shashishekar.jpg',
    name: 'Varsha Shashishekar',
    position: 'Events Officer',
    level: 1,
  },
  {
    image: '/assets/officer/Varun-Bhupathiraju.jpg',
    name: 'Varun Bhupathiraju',
    position: 'Events Officer',
    level: 1,
  },
  {
    image: '/assets/officer/Zoya-Syed.jpg',
    name: 'Zoya Syed',
    position: 'Archives Officer',
    level: 1,
  },
];

export const hackOfficers: Officer[] = [
  // Directors
  {
    image: '/assets/officer/Alan-Roybal.jpg',
    name: 'Alan Roybal',
    position: 'HackUTD Director',
    level: 2,
  },
  {
    image: '/assets/officer/Veer-Shah.jpg',
    name: 'Veer Shah',
    position: 'HackUTD Director',
    level: 2,
    socialLinks: {
      'linkedin': 'https://linkedin.com/in/veermickeyshah',
      'github': 'https://github.com/veermshah',
    },
  },

  // Tech
  {
    image: '/assets/officer/Caleb-Bae.jpg',
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
    image: '/assets/officer/Anish-Alle.jpg',
    name: 'Anish Alle',
    position: 'Tech Coordinator',
    level: 1,
  },
  {
    image: '/assets/officer/Arnav-Vedula.jpg',
    name: 'Arnav Vedula',
    position: 'Technology Coordinator',
    level: 1,
  },
  {
    image: '/assets/officer/Jagadeep-Kalluri.jpg',
    name: 'Jagadeep Kalluri',
    position: 'Tech Coordinator',
    level: 1,
  },
  {
    image: '/assets/officer/Noel-Varghese.jpg',
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
    image: '/assets/officer/Sreevasan-Sivasubramanian.jpg',
    name: 'Sreevasan Sivasubramanian',
    position: 'Tech Coordinator',
    level: 1,
  },
  {
    image: '/assets/officer/Swayam-Arora.jpg',
    name: 'Swayam Arora',
    position: 'Tech Coordinator',
    level: 1,
  },
  {
    image: '/assets/officer/Tharun-Sevvel.jpg',
    name: 'Tharun Sevvel',
    position: 'Tech Coordinator',
    level: 1,
  },

  // Marketing
  {
    image: '/assets/officer/Dhivyesh-Prithiviraj.jpg',
    name: 'Dhivyesh Prithiviraj',
    position: 'Marketing Lead',
    level: 1,
  },
  {
    image: '/assets/officer/Andrea-Alvidres.jpg',
    name: 'Andrea Alvidres',
    position: 'Marketing Coordinator',
    level: 1,
  },
  {
    image: '/assets/officer/Ann-Jayan.jpg',
    name: 'Ann Jayan',
    position: 'Marketing Coordinator',
    level: 1,
  },
  {
    image: '/assets/officer/Danish-Ejaz.jpg',
    name: 'Danish Ejaz',
    position: 'Marketing Coordinator',
    level: 1,
  },
  {
    image: '/assets/officer/Jordan-Joelson.jpg',
    name: 'Jordan Joelson',
    position: 'Marketing Coordinator',
    level: 1,
    socialLinks: {
      'linkedin': 'https://www.linkedin.com/in/jordanjoelson/',
      'personalEmail': 'jordan@jordanjoelson.com',
    },
  },
  {
    image: '/assets/officer/Lisa-Lupeitu\'u.jpg',
    name: 'Lisa Lupeitu\'u',
    position: 'Marketing Coordinator',
    level: 1,
  },
  {
    image: '/assets/officer/Santiago-Islas.jpg',
    name: 'Santiago Islas',
    position: 'Marketing Coordinator',
    level: 1,
  },
  {
    image: '/assets/officer/Sarah-Khan.jpg',
    name: 'Sarah Khan',
    position: 'Marketing Coordinator',
    level: 1,
  },
  {
    image: '/assets/officer/Saran-Jacob.jpg',
    name: 'Saran Jacob',
    position: 'Marketing Coordinator',
    level: 1,
  },
  {
    image: '/assets/officer/Shiloh-Asir.jpg',
    name: 'Shiloh Asir',
    position: 'Marketing Coordinator',
    level: 1,
  },
  {
    image: '/assets/officer/Sristi-Srinivasan.jpg',
    name: 'Sristi Srinivasan',
    position: 'Marketing Coordinator',
    level: 1,
  },

  // Industry
  {
    image: '/assets/officer/Sachi-Hansalia.jpg',
    name: 'Sachi Hansalia',
    position: 'Industry Lead',
    level: 1,
  },
  {
    image: '/assets/officer/Ishita-Saran.jpg',
    name: 'Ishita Saran',
    position: 'Industry Coordinator',
    level: 1,
  },
  {
    image: '/assets/officer/Kavin-Sankar.jpg',
    name: 'Kavin Sankar',
    position: 'Industry Officer',
    level: 1,
  },
  {
    image: '/assets/officer/Monish-Mehta.jpg',
    name: 'Monish Mehta',
    position: 'Industry Coordinator',
    level: 1,
  },
  {
    image: '/assets/officer/Nandini-Paidesetty.jpg',
    name: 'Nandini Paidesetty',
    position: 'Industry Coordinator',
    level: 1,
  },
  {
    image: '/assets/officer/Sahas-Sharma.jpg',
    name: 'Sahas Sharma',
    position: 'Industry Coordinator',
    level: 1,
  },
  {
    image: '/assets/officer/Sheryl-Gerald.jpg',
    name: 'Sheryl Gerald',
    position: 'Industry Coordinator',
    level: 1,
  },

  // Experience
  {
    image: '/assets/officer/Liana-Forster.jpg',
    name: 'Liana Forster',
    position: 'Experience Lead',
    level: 1,
  },
  {
    image: '/assets/officer/Akash-Dasarraju.jpg',
    name: 'Akash Dasarraju',
    position: 'Experience Coordinator',
    level: 1,
  },
  {
    image: '/assets/officer/Keane-Ferdinand.jpg',
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
    image: '/assets/officer/Tien-Phan.jpg',
    name: 'Tien Phan',
    position: 'Experience Coordinator',
    level: 1,
  },

  // Logistics
  {
    image: '/assets/officer/Sofia-Thomas.jpg',
    name: 'Sofia Thomas',
    position: 'Logistics Lead',
    level: 1,
  },
  {
    image: '/assets/officer/Aayushi-Hansalia.jpg',
    name: 'Aayushi Hansalia',
    position: 'Logistics Coordinator',
    level: 1,
  },
  {
    image: '/assets/officer/Joel-Philipose.jpg',
    name: 'Joel Philipose',
    position: 'Logistics Coordinator',
    level: 1,
  },
  {
    image: '/assets/officer/Kaysan-Amin.jpg',
    name: 'Kaysan Amin',
    position: 'Logistics Coordinator',
    level: 1,
  },
  {
    image: '/assets/officer/Nirmal-Shah.jpg',
    name: 'Nirmal Shah',
    position: 'Logistics Coordinator',
    level: 1,
  },
  {
    image: '/assets/officer/Shobana-Ravi.jpg',
    name: 'Shobana Ravi',
    position: 'Logistics Coordinator',
    level: 1,
  },

  // Finance
  {
    image: '/assets/officer/Aatish-Bommisetty.jpg',
    name: 'Aatish Bommisetty',
    position: 'Finance Lead',
    level: 1,
  },
  {
    image: '/assets/officer/Anush-Gudapuri.jpg',
    name: 'Anush Gudapuri',
    position: 'Finance Coordinator',
    level: 1,
  },
];

export const industryOfficers: Officer[] = [
  {
    image: '/assets/officer/Anika-Guin.jpg',
    name: 'Anika Guin',
    position: 'Industry Director',
    level: 2,
  },
  {
    image: '/assets/officer/Michael-Hellman.jpg',
    name: 'Michael Hellman',
    position: 'Industry Officer',
    level: 1,
  },
  {
    image: '/assets/officer/Nidhi-Parvathala.jpg',
    name: 'Nidhi Parvathala',
    position: 'Industry Officer',
    level: 1,
  },
  {
    image: '/assets/officer/Nihita-Soma.jpg',
    name: 'Nihita Soma',
    position: 'Industry Director',
    level: 1,
  },
  {
    image: '/assets/officer/Pratishtha-Rao.jpg',
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
    image: '/assets/officer/Soujanya-Kamalapur.jpg',
    name: 'Soujanya Kamalapur',
    position: 'Industry Officer',
    level: 1,
  },
  {
    image: '/assets/officer/Varun-Bhupathiraju.jpg',
    name: 'Varun Bhupathiraju',
    position: 'Industry Officer',
    level: 1,
  },
];

export const boardOfficers: Officer[] = [
  {
    image: '/assets/officer/Elijah-Walker.jpg',
    name: 'Elijah Walker',
    position: 'ACM President',
    level: 3,
    socialLinks: {
      'linkedin': 'https://linkedin.com/in/elijahtruthwalker',
      'github': 'https://github.com/elijahtwalker',
    },
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
    image: '/assets/officer/Mercedes-Xiong.jpg',
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
    image: '/assets/officer/Anirudh-Vayalali.jpg',
    name: 'Anirudh Vayalali',
    position: 'Development Director',
    level: 2,
    socialLinks: {
      'linkedin': 'https://www.linkedin.com/in/anirudh-vayalali',
      'github': 'https://github.com/axdyv',
      'instagram': 'https://instagram.com/andy.v33',
      'personalEmail': 'anirudhvayalali@gmail.com',
    },
  },
  {
    image: '/assets/officer/Yash-Shah.jpg',
    name: 'Yash Shah',
    position: 'Development Director',
    level: 2,
    socialLinks: {
      'linkedin': 'https://www.linkedin.com/in/yash-shah-15a704280/',
      'github': 'https://github.com/git-yash',
      'personalEmail': 'yashmittalshah@gmail.com',
    },
  },
  {
    image: '/assets/officer/Aashay-Vishwakarma.jpg',
    name: 'Aashay Vishwakarma',
    position: 'Education Director',
    level: 2,
    socialLinks: {
      'linkedin': 'https://linkedin.com/in/https://www.linkedin.com/in/aashayvishwakarma/',
      'github': 'https://github.com/aashayvishwakarma',
      'instagram': 'https://instagram.com/aashayvishwakarma',
      'personalEmail': 'aashay.vkarma@gmail.com',
    },
  },
  {
    image: '/assets/officer/Hannah-Van.jpg',
    name: 'Hannah Van',
    position: 'Education Director',
    level: 2,
  },
  {
    image: '/assets/officer/Alan-Roybal.jpg',
    name: 'Alan Roybal',
    position: 'HackUTD Director',
    level: 2,
  },
  {
    image: '/assets/officer/Veer-Shah.jpg',
    name: 'Veer Shah',
    position: 'HackUTD Director',
    level: 2,
    socialLinks: {
      'linkedin': 'https://linkedin.com/in/veermickeyshah',
      'github': 'https://github.com/veermshah',
    },
  },
  {
    image: '/assets/officer/Anika-Guin.jpg',
    name: 'Anika Guin',
    position: 'Industry Director',
    level: 2,
  },
  {
    image: '/assets/officer/Anusha-Patel.png',
    name: 'Anusha Patel',
    position: 'Community Director',
    level: 2,
  },
  {
    image: '/assets/officer/Vyshnav-Vijish.jpg',
    name: 'Vyshnav Vijish',
    position: 'Community Director',
    level: 2,
    socialLinks: {
      'linkedin': 'https://www.linkedin.com/in/vyshnav-vijish-aba4b9269/',
    },
  },
  {
    image: '/assets/officer/Anvi-Sidda.jpg',
    name: 'Anvi Sidda',
    position: 'Media Director',
    level: 2,
  },
  {
    image: '/assets/officer/Sneha-Maram.jpg',
    name: 'Sneha Maram',
    position: 'Media Director',
    level: 2,
  },
  {
    image: '/assets/officer/Adarsh-Goura.jpg',
    name: 'Adarsh Goura',
    position: 'Projects Director',
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
    image: '/assets/officer/Priti-See.jpg',
    name: 'Priti See',
    position: 'Research Director',
    level: 2,
  },
  {
    image: '/assets/officer/Purva-Patel.jpg',
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
    image: '/assets/officer/Aatish-Bommisetty.jpg',
    name: 'Aatish Bommisetty',
    position: 'Finance Director',
    level: 2,
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
  board: boardOfficers,
};
