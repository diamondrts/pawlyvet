import img2 from "@/components/img/img2.png";
import img3 from "@/components/img/img3.png";
import img9 from "@/components/img/img9.png";
import { staticData } from "../../../server/storage";

const TeamComponent = () => {

  return (
    <>
      {/* ABOUT US */}
      <section id="about" className="py-20 bg-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                  <img
                    src={img2}
                    alt="Cat"
                    className="rounded-3xl shadow-lg w-full h-64 object-cover"
                  />
                  <div className="bg-primary p-6 rounded-3xl text-white text-center shadow-lg">
                    <span className="block text-4xl font-bold font-display mb-1">
                      10+
                    </span>
                    <span className="text-sm opacity-90">
                      Años de experiencia
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <img
                    src={img3}
                    alt="Dog"
                    className="rounded-3xl shadow-lg w-full h-48 object-cover"
                  />
                  <img
                    src={img9}
                    alt="Team"
                    className="rounded-3xl shadow-lg w-full h-64 object-cover"
                  />
                  </div>
              </div>
            </div>

            <div className="order-1 md:order-2 space-y-8">
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm uppercase tracking-wide">
                Sobre Nosotros
              </div>
              <h2 className="text-4xl font-display font-bold leading-tight">
                Más que veterinarios, somos amantes de los animales
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                En Pawly Vet, entendemos que tu mascota es un miembro más de la
                familia. Nuestra historia comenzó con el deseo de crear un
                espacio donde la medicina veterinaria de alta calidad se
                encuentre con el trato cálido y humano.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Cada miembro de nuestro equipo ha sido seleccionado no solo por
                su excelencia profesional, sino por su capacidad de conectar con
                cada paciente peludo que entra por nuestra puerta.
              </p>
 
              
            </div>
          </div>
        </div>

        <div className="grid justify-center pt-16">
                <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
                   {staticData.team && staticData.team?.map((member, i) => (
                  //  {staticData.team?.slice(0, 4).map((member, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 bg-white p-2 pr-4 rounded-full shadow-sm border border-border/50"
                    >
                      <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center overflow-hidden">
                        {member.imageUrl ? (
                          <img
                            src={member.imageUrl}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span className="font-bold text-accent-foreground capitalize" >
                            {member.name[0]}
                          </span>
                        )}
                      </div>
                      <div className="text-sm">
                        <p className="font-bold leading-none capitalize">{member.name}</p>
                        <p className="text-xs text-muted-foreground capitalize">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
      </section>
    </>
  );
};

export default TeamComponent;
