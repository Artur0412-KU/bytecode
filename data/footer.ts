const footerItems = [
    {
        id: 1,
        name: 'Company',
        list: [
            { title: 'About Us', link: '/company' },
            { title: 'Contact Us', link: '/company' }
        ]
    },
    {
        id: 2,
        name: 'Services',
        list: [
            { title: 'Security Testing', link: '/services/security/test'},
            { title: 'DevSecOps', link: '/services/security/devops' },
            { title: 'vCISO', link: '/services/security/vciso' },
            { title: 'Security Monitoring', link: '/services/security/monitoring' },
            { title: 'Security Response Team', link: '/services/security/response' }
        ]
    },
    {
        id: 3,
        name: 'Resources',
        list: [
            { title: 'Cases', link: '/resources/cases' },
            { title: 'Blogs', link: '/resources/blog' },
            { title: 'Datasheets and Reports', link: '/resources/datasheets' },
            { title: 'Video and Webinars', link: '/resources/videos' }
        ]
    },
    {
        id: 4,
        name: 'Partners',
        list: [
            { title: 'Become a Partner', link: '/partners' },
            { title: 'Partnership Benefits', link: '/partners' }
        ]
    }
];

export default footerItems;