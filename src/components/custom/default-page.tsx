type DefaultPageProp = {
  pageName: string
}

export default function DefaultPage(prop: DefaultPageProp) {
  return (
    <div className="min-h-screen min-w-screen flex justify-center items-center">
      <h1 className="text-4xl font-bold">{prop.pageName}</h1>
    </div>
  )
}
