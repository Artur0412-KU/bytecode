type Case = {
    id: number;
    conclusion: string;
    image: string;
    text: string;
    title: string;
    list: {id: number, item: string}[]
}

export default Case;