import { Mountain } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="py-12 bg-background border-t border-gray-800">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Mountain className="h-6 w-6" />
              <span className="font-bold text-xl">Portfolio</span>
            </Link>
            <p className="text-muted-foreground mb-4">
              Assembling Tech legos
            </p>
            <div className="flex gap-4">
              {["Twitter",  "GitHub"].map((platform) => (
                <Link key={platform} href="#" className="text-muted-foreground hover:text-white transition-colors">
                  {platform}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Navigation</h3>
            <ul className="space-y-3">
              {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>vidaressay@gmail.com</li>
              <li>+1 (555) 123-4567</li>
              <li>Jaipur, Rajasthan</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
