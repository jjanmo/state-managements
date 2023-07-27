import Layout from '@/components/common/Layout'
import { Header, List } from '@/components/todoApp'

export default function TodoApp() {
  return (
    <Layout>
      <div className="flex h-full items-center justify-center  bg-slate-200">
        <div className="flex h-[720px] w-[512px] flex-col rounded-2xl bg-white ">
          <Header />
          <List />
        </div>
      </div>
    </Layout>
  )
}
