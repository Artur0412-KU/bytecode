import FirstLab from '@/public/main/blog/laboratory/first.svg'
import SecondLab from '@/public/main/blog/laboratory/second.svg'
import ThirdLab from '@/public/main/blog/laboratory/third.svg'

import FirstPractice from '@/public/main/blog/practice/first.svg'
import SecondPractice from '@/public/main/blog/practice/second.svg'
import ThirdPractice from '@/public/main/blog/practice/third.svg'
import FourthPractice from '@/public/main/blog/practice/fourth.svg'
import FifthPractice from '@/public/main/blog/practice/fifth.svg'
import SixthPractice from '@/public/main/blog/practice/sixth.svg'
import SevethPractice from '@/public/main/blog/practice/seventh.svg'

const laboratoryData = [
    {
        id: 1,
        image: FirstLab,
        title: 'Laboratory General Description',
        link: 'https://medium.com/@andrew_16935/laboratory-part-i-e6dfcb4da49a',
        description: 'This  is the first article in a series about Laboratory. Laboratory, or Labs  as we call it, is the project that allows to get a lot of openness. It  uncovered and allowed us to work out a lot of topics that were waiting  for their time.',
        date: 'Jun 4, 2022',
        length: '· 3 min read ',
        theme: '· Laboratory'
    },
    {
        id: 2,
        image: SecondLab,
        title: 'Laboratory Security Assessment',
        link: 'https://medium.com/@andrew_16935/laboratory-part-ii-28d1e8906074',
        description: 'In the previous article I’ve described the reason for the Labs overall as a project. Today I’m going to continue with the process we’ve aimed and failures we’ve got. Our team spent enormous amount of time dealing with different clients so the expertise was gained and allows to bring a value to the outcome. So let’s go.',
        date: 'Jun 7, 2022',
        length: '· 4 min read ',
        theme: '· Laboratory'
    },
    {
        id: 3,
        image: ThirdLab,
        title: 'Laboratory Secure Development Life Cycle',
        link: 'https://medium.com/@andrew_16935/laboratory-part-iii-labssdlc-5d5b387f9a79',
        description: 'Let’s  ask a product creator what is the most boring topic? I’m sure that the  first reply will be security. And to make it even more boring let’s  imagine Secure Software Development Life Cycle.',
        date: 'Jun 27, 2022',
        length: '· 12 min read ',
        theme: '· Laboratory'
    }
]


const practiceData = [
    {
        id: 1,
        image: FirstPractice,
        title: 'Cyber Hygiene for Cryptocurrency Investing and Trading',
        link: 'https://medium.com/@mykhailo.antonishyn/cyber-hygiene-for-cryptocurrency-investing-and-trading-a19cae9b487d',
        description: 'Hackers  are awake! For example, North Korean hackers stole more than $1 billion  in cryptocurrencies between 2015 and 2020. The exchanger should protect  itself, but how can you protect yourself from an ordinary user?',
        date: 'Jan 18, 2023',
        length: '· 8 min read ',
        theme: '· Practice'
    },
    {
        id: 2,
        image: SecondPractice,
        title: 'Cyber Hygiene Rules',
        link: 'https://medium.com/@mykhailo.antonishyn/cyber-hygiene-rules-9cd32a7614c0',
        description: 'Why can cyber hygiene rules save you from cyber-attacks?\n' +
            '\n' +
            'For  the personal security of your devices and information, all users must  follow the basic rules of cyber hygiene. These rules are very easy,  however, they require using of services, and some of them require  purchasing a license. \n' +
            '\n' +
            'It  allows you to increase the level of your cybersecurity and will reduce  the probability that you leave a weak link in company security and  targets for hackers.',
        date: 'Nov 23, 2022',
        length: '· 6 min read ',
        theme: '· Practice'
    },
    {
        id: 3,
        image: ThirdPractice,
        title: 'Analysis of testing approaches to Android mobile application vulnerabilities',
        link: 'https://medium.com/@mykhailo.antonishyn/analysis-of-testing-approaches-to-android-mobile-application-vulnerabilities-fedcb53bf439',
        description: 'According  to BetaNews, among the 30 best applications with more than 500,000  downloads, 94% contain at least 3 average risk vulnerabilities, while  77% contain at minimum two high-level vulnerabilities. Among the 30  applications 17% were vulnerable to MITM attacks exposing all data to  interception by malicious users. Furthermore, 44% of applications  contain confidential data with strict encryption requirements, including  passwords or API keys, while 66% utilize functional abilities which can  compromise users’ confidentiality. This is exactly why mobile devices  are subject to numerous security discussions.',
        date: 'Oct 27, 2022',
        length: '· 14 min read ',
        theme: '· Practice'
    },
    {
        id: 4,
        image: FourthPractice,
        title: 'Password managers',
        link: 'https://medium.com/@mykhailo.antonishyn/password-managers-275eda189371',
        description: 'Businesses  should enforce strong password policy requirements. A strong password  isn’t just about one password, it’s important that you guarantee strong  passwords for each account that you access through your computer. When  you are utilizing a corporate network, the network administrator may  encourage you to use a strong password.',
        date: 'Oct 30, 2022',
        length: '· 4 min read ',
        theme: '· Practice'
    },
    {
        id: 5,
        image: FifthPractice,
        title: 'Securing an application written in C#',
        link: 'https://medium.com/@mykhailo.antonishyn/securing-an-application-written-in-c-67e48f91b60',
        description: 'The  issue of intellectual property protection always arises among  developers. Unfortunately, programs written in .NET are quite easy to  “open”. Even Visual Studio comes with ILDasm disassembler. With the  wrong application architecture, all attempts to protect it will be  immediately doomed. So, if you write a client-server application in  which all the logic is calculated on the server, and the client itself  simply serves to display the results on the user’s screen, then there is  even no point in protecting such a program — the keys are stored in the  database on the server and when connected, they are simply checked by  base. In this case, there is not much valuable in the client code.  Serious products are tied to electronic keys inserted into a PC, but  ordinary developers simply do not have such capabilities. The main  problem with .NET programs in this area is the easy way to get the  source code. For example, you can use the free dotPeek from JetBrains.  Based on the well-known Resharper from the same studio, this tool allows  you to easily reveal the insides of the current program, if an unlucky  programmer did not take care of its protection.',
        date: 'Oct 19, 2022',
        length: '· 4 min read ',
        theme: '· Practice'
    },
    {
        id: 6,
        image: SixthPractice,
        title: 'dotPeek Encoding',
        link: 'https://medium.com/@mykhailo.antonishyn/dotpeek-encoding-2d61dfc1f462',
        description: 'Programming  does not all go down to writing a few lines of code in order to build  the desired application. Nowadays, structures are built with various  tools that are either easier to use or provide more flexibility. When it  comes to coding, dotPeek from JetBrains aims to provide a user friendly  environment for decompiling .NET assemblies to C# code. dotPeek is a  free-of-charge standalone tool based on ReSharper’s bundled decompiler.  It can reliably decompile any .NET assembly into equivalent C# or IL  code. The main advantages of dotPeek are the quality of decompilation,  ease of loading and managing .NET assemblies. In addition, dotPeek  offers numerous search, navigation and coding features borrowed from  ReSharper. As a free application dotPeek has a well-deserved place in  the JetBrains product line.',
        date: 'Nov 1, 2022',
        length: '· 4 min read ',
        theme: '· Practice'
    },
    {
        id: 7,
        image: SevethPractice,
        title: 'Mobile app reverse engineering with Ghidra',
        link: 'https://medium.com/@mykhailo.antonishyn/mobile-app-reverse-engineering-with-ghidra-41ad83762faa',
        description: 'Reverse  engineering is the long process of analyzing the low-level program code  of an application. This step is necessary for the mobile penetration  testing as it can reveal hidden or unused program features, bypass root  access detection, discover hardcoded keys etc. Reverse engineering can  be done using various famous programs: JADX, Bytecode viewer, IDA Pro,  Ghidra, JEB.',
        date: 'Nov 1, 2022',
        length: '· 5 min read ',
        theme: '· Practice'
    }
]

export {laboratoryData, practiceData}