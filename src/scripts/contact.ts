import emailjs from "@emailjs/browser";

const form = document.getElementById("contact-form");
const contactMessage = document.getElementById("contact-message");
const sendEmail = (e: SubmitEvent) => {
  e.preventDefault();

  console.log("enviando");

  emailjs
    .sendForm(
      "service_f4n89sb",
      "template_y0q19au",
      "#contact-form",
      "dLWjy5QHwo9aNydUU",
    )
    .then(() => {
      contactMessage!.textContent = "Message sent successfully ✅";
      (e.target as HTMLFormElement).reset();
    })
    .catch((err) => {
      contactMessage!.textContent = "Message not sent ❌";
    });

};

form?.addEventListener("submit", sendEmail);
