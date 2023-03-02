import Link from 'next/link'



const Nav = () => {
  return (
    <nav>
      <Link href='/'>
        Replicate
      </Link>
      <Link href='/deepAI'>
        DeepAI
      </Link>
    </nav>
  )
};

export default Nav;