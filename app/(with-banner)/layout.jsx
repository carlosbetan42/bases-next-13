import { Counter } from './posts/Counter';

export default function Layout({ children }) {
  return (
    <div>
      {/* <Counter /> */}
      {/* <small>Home &bull; Posts</small> */}
      <marquee style={{ color: 'purple', background: 'white' }}>Layout compartido entre diferentes carpetas</marquee>
      {children}
    </div>
  );
}
