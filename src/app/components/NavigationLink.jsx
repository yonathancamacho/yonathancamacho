import Link from "next/link"

const NavigationLink = ({ href, title }) => {
    return (
        <Link href={href} className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl font-semibold rounded md:p-0 hover:text-indigo-500'>
            {title}
        </Link>
    )
}

export default NavigationLink
