export const site = {
  phone: "+234 806 494 5306",
  phoneHref: "tel:+2348064945306",
  whatsapp: "2348064945306",
  email: "kafeera@gmail.com",
  website: "www.kafeera.com",
  city: "Abuja, Nigeria",
};

export const whatsappLink = (text = "Hello KAFÉERA, I would like to arrange a private appointment.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;