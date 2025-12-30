function MapComponent() {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1729.534162417862!2d-69.9601512!3d18.470977599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf8b2765fded6b%3A0x9cfff8da96eb0f19!2sPawly%20Vet!5e1!3m2!1ses!2sdo!4v1767040110238!5m2!1ses!2sdo"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Ubicación"
    ></iframe>
  );
}

export default MapComponent;
