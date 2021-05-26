import Image from 'next/image'
function Avater() { 
    return (
        <Image src="/profile.jpg" alt="me"
            width={200}
            height={100}
        />
    )
}

export default Avater