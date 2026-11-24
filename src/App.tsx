import Glassbound from './components/originkit/ui/glassbound'

function App() {
  return (
    <div className="mx-auto max-w-[1200px] px-[max(18px,4vw)] text-center">
      <header className="mb-2">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#e3262c]">
          A visual interlude
        </p>
        <h2 className="text-2xl font-light uppercase tracking-[0.12em] text-[#f2f2f2] sm:text-3xl">
          A softer kind of motion
        </h2>
      </header>
      <div className="h-[clamp(230px,28vw,360px)] overflow-hidden">
        <Glassbound
          accent="#e3262c"
          background="#0b0b0b"
          lift={72}
          size={175}
          speed={24}
          style={{ minWidth: '100%', minHeight: '100%' }}
        />
      </div>
    </div>
  )
}

export default App
