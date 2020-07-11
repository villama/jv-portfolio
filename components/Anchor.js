export default function Anchor({ display, link }) {
  return (
    <a className='anchor' href={link}>
      {display}
      <style jsx>{`
        .anchor {
          text-decoration: none;
          color: inherit;
        }
        .anchor:hover {
          color: tomato;
          transition: 200ms;
        }
      `}</style>
    </a>
  )
}
