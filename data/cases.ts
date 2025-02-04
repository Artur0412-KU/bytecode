import Rokkex from '@/public/main/cases/rokkex.svg'
import RadaBank from '@/public/main/cases/radabank.svg'
import WinBank from '@/public/main/cases/winbank.svg'
import SmeGo from '@/public/main/cases/sme.svg'
import Hacken from '@/public/main/cases/hacken.svg'
import WorkPacks from '@/public/main/cases/workpacks.svg'
import Cert from '@/public/main/cases/cert.svg'
import LunchHub from '@/public/main/cases/lunch.svg'
import NBU from '@/public/main/cases/nbu.svg'

const casesData = [
    {
        id: 1,
        image: Rokkex,
        title: 'ROKKEX cryptocurrency exchange',
        text: '',
        list: [
            {
                id: 1,
                item: 'infrastructure audit',
            },
            {
                id: 2,
                item: 'web application penetration testing (web pentest).',
            },
            {
                id: 3,
                item: 'smart contracts audit'
            },
            {
                id: 4,
                item: 'building a cybersecurity program'
            }
        ],
        conclusion: '',
    },
    {
        id: 2,
        image: RadaBank,
        title: 'Radabank a universal Ukrainian bank',
        text: '',
        list: [
            {
                id: 1,
                item: 'comprehensive information security audit',
            },
            {
                id: 2,
                item: 'penetration testing (graybox and blackbox pentest)',
            },
            {
                id: 3,
                item: 'information security audit (documentation and processes)'
            },
            {
                id: 4,
                item: 'cybersecurity program consulting'
            }
        ],
        conclusion: '',
    },
    {
        id: 3,
        image: WinBank,
        title: 'WinBank mobile banking',
        text: '',
        list: [
            {
                id: 1,
                item: 'penetration testing of mobile applications  (Android and iOS)',
            },
            {
                id: 2,
                item: 'web application penetration testing (web pentest)',
            },
            {
                id: 3,
                item: 'sociotechnical testing'
            },
        ],
        conclusion: '',
    },
    {
        id: 4,
        image: SmeGo,
        title: 'SMEGO financier',
        text: '',
        list: [
            {
                id: 1,
                item: 'penetration testing of mobile applications  (Android and iOS)',
            },
            {
                id: 2,
                item: 'web application penetration testing (web pentest)',
            },
            {
                id: 3,
                item: 'sociotechnical testing'
            },
        ],
        conclusion: '',
    },
    {
        id: 5,
        image: Hacken,
        title: 'HACKEN',
        text: 'Working under the company\'s whitelabel as the core security team:',
        list: [
            {
                id: 1,
                item: 'source code review',
            },
            {
                id: 2,
                item: 'penetration testing',
            },
            {
                id: 3,
                item: 'phishing protection.'
            },
            {
                id: 4,
                item: 'company security.'
            },
            {
                id: 5,
                item: 'software development on secure software development cycle (SecSDLC).'
            },
        ],
        conclusion: 'The main specialization of the company is crypto wallets, crypto bij, defi projects.',
    },
    {
        id: 6,
        image: WorkPacks,
        title: 'Workpacks',
        text: '',
        list: [
            {
                id: 1,
                item: 'comprehensive information security audit',
            },
            {
                id: 2,
                item: 'preparation of the company for certification and passing the international audit for compliance with SOC2 Type2 and ISO27001 requirements    phishing protection.',
            },
            {
                id: 3,
                item: 'company security.'
            },
            {
                id: 4,
                item: 'vCISO support and consulting'
            },
        ],
        conclusion: 'The main specialization of the company is crypto wallets, crypto bij, defi projects.',
    },
    {
        id: 7,
        image: Cert,
        title: 'CERT-UA',
        text: '',
        list: [
            {
                id: 1,
                item: 'information security audit',
            },
            {
                id: 2,
                item: 'penetration testing (pentest)',
            },
            {
                id: 3,
                item: 'forensic analysis'
            },
            {
                id: 4,
                item: 'cybercrime investigation and prevention'
            },
            {
                id: 5,
                item: 'development and customization of software for real-time protection and vulnerability scanning'
            },
        ],
        conclusion: '*Our specialists have long been part of the team that worked on the protection of gov.ua resources.',
    },
    {
        id: 8,
        image: LunchHub,
        title: 'LunchHub',
        text: '',
        list: [
            {
                id: 1,
                item: 'infrastructure audit',
            },
            {
                id: 2,
                item: 'Web application penetration testing (web pentest)',
            },
            {
                id: 3,
                item: 'consulting on building an access control system'
            },
            {
                id: 4,
                item: 'product migration consulting'
            },
        ],
        conclusion: '',
    },
    {
        id: 9,
        image: NBU,
        title: 'CSIRT-NBU',
        text: '',
        list: [
            {
                id: 1,
                item: 'monitoring, detecting and responding to cyber incidents, collecting, accumulating and analyzing data on detected cyber incidents in the financial sector.',
            },
            {
                id: 2,
                item: 'analyzing current cyber threats, studying malware samples, creating cyber threat indicators, and developing recommendations for counteraction.',
            },
            {
                id: 3,
                item: 'promptly informing cybersecurity entities about recorded attempts to commit cyberattacks, disseminating information about cyber threat indicators.'
            },
            {
                id: 4,
                item: 'providing advisory assistance to the financial sector on organizing cyber defense, detecting cyber incidents, responding to and countering cyber threats, and eliminating the consequences of cyber incidents.',
            },
            {
                id: 5,
                item: 'development of recommendations for cyber defense.'
            },
            {
                id: 6,
                item: 'cooperation and exchange of information with international organizations and trusted external sources of information on responding to cyberattacks.'
            }
        ],
        conclusion: '',
    },
]

export default casesData;