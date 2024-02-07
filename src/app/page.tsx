import { Button } from "@/components/ui/button";
import { CalendarClock, MessageCircleMore } from "lucide-react";

export default function Home() {
	return (
		<main className='flex flex-col justify-center h-screen p-12'>
			<div>
				<div
					className='bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-700 via-neutral-800 to-zinc-900
          inline-flex px-4 py-1 rounded-full mb-2 border border-gray-600 shadow-lg
          text-white font-semibold antialiased'>
					Website em produção
				</div>
			</div>
			<h2 className='scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
				Desenvolvedor web, especializado em web motion e micro interações.
			</h2>
			<p className='leading-7'>
				Um programador e designer de alto nível pronto para começar o seu
				projeto o mais rápido possível, por um preço que cabe no seu bolso.
			</p>
			<div className='flex flex-col sm:flex-row gap-3 mt-3'>
				<Button asChild className='rounded-full'>
					<a href='https://api.whatsapp.com/send?phone=5598991641170'>
						<MessageCircleMore className='mr-2 h-6 w-6' />
						Enviar mensagem
					</a>
				</Button>
				<Button asChild className='rounded-full' variant={"outline"}>
					<a href='https://calendly.com/gxldemar/gildemardev-reuniao'>
						<CalendarClock className='mr-2 h-6 w-6' />
						Marcar uma chamada
					</a>
				</Button>
			</div>
		</main>
	);
}
