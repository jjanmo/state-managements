import Layout from '@/components/common/Layout'
import { Form, Header, List } from '@/components/todoApp'

export default function TodoApp() {
  return (
    <Layout>
      <div className="flex h-full items-center justify-center bg-slate-200">
        <div className="h-[768px] w-[512px] rounded-2xl bg-white">
          <Header />
          <List />
          <Form />
        </div>
      </div>
    </Layout>
  )
}
