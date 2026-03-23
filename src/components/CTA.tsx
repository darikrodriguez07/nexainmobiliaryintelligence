import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 lg:py-32 surface-warm">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl text-foreground mb-5">
              Tu competencia ya se está automatizando
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Te mostramos como funciona en 15 minutos y descubre cuántas horas transformadas en dinero puede ahorrar tu equipo cada semana con nuestro sistema inteligente.
            </p>
          <Button asChild variant="hero" size="xl">
          <a
           href="https://calendly.com/darikrodriguez-07/30min"
           target="_blank"
           rel="noopener noreferrer"
           className="flex items-center gap-3"
          >
           <span>Agendar Reunión Gratuita</span>
           <ArrowRight className="w-5 h-5" />
          </a>
          </Button>
            <p className="text-xs text-muted-foreground mt-5">Sin compromiso · Personalizado para ti · Soporte en español</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};


export default CTA;
