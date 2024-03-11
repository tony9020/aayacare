import { ChevronRight, MessageCircle } from "lucide-react"

export default function Banner(): JSX.Element {
  return (
    <div className="bannerall">
      <div className="banner flex justify-center mt-2">
        <a
          href="https://api.whatsapp.com/send?phone=918861259605&text=Hello%2C%20I%20want%20to%20know%20more%20about%20your%20services."
          target="_parent"
        >
          <div className="glow flex items-center space-x-1 bg-zinc-100 px-4 py-2 text-xs dark:bg-zinc-800 md:text-sm lg:text-base rounded-full">
            <MessageCircle color="#0cc144" />
            <span className="text-zinc-800 dark:text-zinc-200">
              24 * 7 Online on
            </span>
            <span className="text-green-700 font-medium dark:text-green-300">
              WhatsApp
            </span>
            <ChevronRight className="w-4 h-4" />
          </div>
        </a>
      </div>
      <div className="bannermob flex justify-center mt-2">
        <a
          href="https://api.whatsapp.com/send?phone=918861259605&text=Hello%2C%20I%20want%20to%20know%20more%20about%20your%20services."
          target="_parent"
        >
          <div className="glow flex items-center space-x-1 bg-zinc-100 px-4 py-2 text-xs dark:bg-zinc-800 md:text-sm lg:text-base rounded-full">
            <span className="text-green-700 font-medium dark:text-green-300">
              <MessageCircle color="#0cc144" />
              chat
            </span>
          </div>
        </a>
      </div>
    </div>
  )
}
