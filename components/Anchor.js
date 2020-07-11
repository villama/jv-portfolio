export default function Anchor({ display, link }) {
  return (
    <a className='anchor' href={link} target='_blank' rel='noopener noreferrer'>
      {display}
      <style jsx>{`
        .anchor {
          text-decoration: none;
          color: inherit;
          transition: 200ms;
        }
        .anchor:hover {
          color: tomato;
          text-shadow: 0.5px 0px, 0.5px 0px;
        }
      `}</style>
    </a>
  )
}
