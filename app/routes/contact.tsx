import "~/styles/contact.css"

export default function Contact() {
  return (
    <main className="contact">
      <div className="contact__content">
        <p>
          For enquiries relating to available works, exhibitions, loans, publications, or research,
          please get in touch:{" "}
        </p>
        <a style={{ textDecoration: "underline" }} href="mailto:dizharford@gmail.com">
          dizharford@gmail.com
        </a>
      </div>
    </main>
  )
}
