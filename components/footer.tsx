import { Github, Linkedin, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className="py-8 border-t">
      <div className="flex justify-center space-x-6">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <Github size={24} />
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
          <Linkedin size={24} />
        </a>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
          <Twitter size={24} />
        </a>
      </div>
      <p className="text-center mt-4">© 2023 Rahul Hingve. All rights reserved.</p>
    </footer>
  )
}

