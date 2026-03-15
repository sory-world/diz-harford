import "~/styles/contact.css"
import { motion } from "motion/react"

export default function Contact() {
  return (
    <motion.main
      className="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="contact__content">
        <p>
          For enquiries relating to available works, exhibitions, loans, publications, or research,
          please get in touch:{" "}
        </p>
        <a style={{ textDecoration: "underline" }} href="mailto:dizharford@gmail.com">
          dizharford@gmail.com
        </a>
      </div>
    </motion.main>
  )
}
