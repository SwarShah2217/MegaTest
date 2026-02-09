interface MessageProps {
  goToPage: (page: string) => void;
}

function Message({ goToPage }: MessageProps) {
    const name = 'Swar Shah'
    return <h1 className='bg-blue-600' onClick={() => goToPage("Page2")}>hello {name}</h1>
}

export default Message