import {useContadorStore} from './store/ContadorStore';

export function ContadorComponent() {
  const {count} = useContadorStore()
  return (
    <div> Hello World with Zustand {count}</div>
  )
}
