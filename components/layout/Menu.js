import Link from "next/link";

export default function Menu(style) {
  const isHeaderFixed = style.style === "slideInDown";
  console.log(isHeaderFixed);

  return (
    <>
      <ul className="navigation">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li className="dropdown">
          <Link href="/about">About</Link>
          <ul>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/faqs">FAQs</Link>
            </li>
          </ul>
        </li>
        <li className="">
          <Link href="/services">Services</Link>
        </li>

        {!isHeaderFixed ? (
          <li>
            <Link href="/contact">Contact Us</Link>
          </li>
        ) : null}
      </ul>
    </>
  );
}
