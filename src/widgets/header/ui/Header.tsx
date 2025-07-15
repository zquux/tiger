export function Header() {
  return (
    <header className="min-h-[96px] w-full bg-black">
      <div className="h-full container mx-auto flex items-center justify-between">
        <img src="/website-icons/logo.svg" />
        <div className="flex gap-2">
          <ul className="flex items-center gap-4 font-PTSerif text-">
            <li>Home</li>
            <li>Tigers Stock</li>
            <li>Newsletters</li>
            <li>Personal Finance</li>
            <li>Contact Us</li>
          </ul>
          <button>Login</button>
        </div>
      </div>
    </header>
  );
}
