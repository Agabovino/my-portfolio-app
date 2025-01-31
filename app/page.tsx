'use client'
import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import { Card, CardHeader, CardBody, Image } from "@heroui/react";
import { Tabs, Tab } from "@heroui/react";
import { Input, Button, Tooltip, Textarea } from "@heroui/react";
import React, { useState } from "react";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/react";

export default function Home() {

  const pdfUrl = "/assets/Currículo - Ágabo.pdf";


  const handleDownload = () => {

    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Currículo - Ágabo.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const [opened, setOpened] = useState(false)
  const [visible, setVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setVisible(true);
      setSuccess(data.message);
    } catch (error) {
      setSuccess("Erro ao enviar mensagem.");
    } finally {
      setLoading(false);
    }
  };

  let tabs = [
    {
      img: '/images/image1.png',
      id: "CT-UFPB",
      label: "CT-UFPB",
      content:
        "Desenvolvimento de um site moderno e responsivo para o CT UFPB, destacando serviços, eventos e acesso fácil a informações acadêmicas",
    },
    {
      img: '/images/image-17-remove-bg-io.png',
      id: "App esfirras",
      label: "App esfirras",
      content:
        "Protótipo de aplicativo mobile para uma esfiharia, proporcionando uma experiência prática e intuitiva para os clientes realizarem pedidos de forma rápida e eficiente.",
    },
    {
      img: '/images/Group8.png',
      id: "Echo Clean",
      label: "EchoClean",
      content:
        "Desenvolvimento de um site moderno e funcional para a EchoClean, empresa especializada em higienização a seco de estofados em João Pessoa.",
    },
  ];

  return (
    <div>

      {visible ? (
        <Modal isOpen={visible} onClose={() => setVisible(false)}>
          <ModalContent>
            <ModalHeader>Mensagem enviada com sucesso!</ModalHeader>
            <ModalFooter>
              <Button onPress={() => setVisible(false)}>fechar</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      ) : null}

      <section id="sobremim" className="border flex items-center justify-center gap-4 max-lg:pt-12 max-md:flex-wrap">
        <div className="inline-block  sm:w-1/2 text-center justify-center">
          <span className={title()}>Oi, eu sou &nbsp;</span>
          <span className={title({ color: "blue" })}>Ágabo Nascimento&nbsp;</span>
          <br />
          <div className={subtitle({ class: "mt-4" })}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac placerat metus, et condimentum est. Praesent tempor magna et quam vestibulum, mollis viverra eros iaculis. Duis nec tortor non sapien dictum facilisis.
          </div>
          <div className="pt-2 transition-transform transform hover:scale-102  hover:translate-y-[-5px]">
            <Button role="button" variant="ghost" onPress={handleDownload}>
              Baixar currículo
            </Button>
          </div>
        </div>
        <div className="flex max-md:w-[75%] md:w-1/2">
          <img className="" src="/images/eu.png" alt="" />
        </div>
      </section>

      <section id="sobremim" className=" md:p-12 flex-col  border py-24 gap-6 flex items-center justify-center bg-[url('/images/3d-shapes-sky-tones-background-b.png')] bg-center bg-cover">
        <h1 className={title({ color: "blue", size: "sm" })}>Área de atuação</h1>

        <div className=" max-md:w-1/2 flex items-center justify-center gap-6 my-8 max-md:flex-wrap">
          <Card isBlurred className="md:w-[100%] md:h-96 py-12 shadow-lg transition-transform transform hover:scale-102 hover:shadow-lg hover:translate-y-[-5px]">
            <div className="md:h-16 flex items-center justify-center overflow-visible ">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src="/icons/web-design.png"
                width={45}
              />
            </div>
            <CardHeader className="flex-col text-center">
              <h2 className={title({ class: "sm", size: "xxs", color: "violet" })}>
                Designer UI/UX
              </h2>
              <p className={subtitle({ class: "text-small" })}>Criando e mantendo interfaces de usuário intuitivas e experiências de usuário envolventes,
                garantindo a facilidade de uso e a satisfação dos usuários finais.</p>
            </CardHeader>
          </Card>
          <Card isBlurred className="md:w-[100%] md:h-96 py-12 shadow-lg transition-transform transform hover:scale-102 hover:shadow-lg hover:translate-y-[-5px]">
            <div className="md:h-16 flex items-center justify-center overflow-visible ">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src="/icons/app-settings.png"
                width={55}
              />
            </div>
            <CardHeader className="flex-col text-center">
              <h2 className={title({ class: "sm", size: "xxs", color: "violet" })}>
                Mobile First
              </h2>
              <p className={subtitle({ class: "text-small" })}>Desenvolvendo e mantendo websites otimizados para dispositivos móveis,
                garantindo que eles sejam responsivos e ofereçam uma experiência de usuário.</p>
            </CardHeader>
          </Card>
          <Card isBlurred className="py-12 md:w-[100%] md:h-96 shadow-lg transition-transform transform hover:scale-102 hover:shadow-lg hover:translate-y-[-5px]">
            <div className="md:h-16 flex items-center justify-center overflow-visible">
              <Image
                alt="Card background"
                className="object-cover rounded-xl "
                src="/icons/programming.png"
                width={50}
              />
            </div>
            <CardHeader className="flex-col text-center">
              <h2 className={title({ class: "sm", size: "xxs", color: "violet" })}>
                Desenvolvimento Web
              </h2>
              <p className={subtitle({ class: "text-small" })}>Criando e mantendo websites, envolvendo tarefas como codificação, design e
                construção de funcionalidades.</p>
            </CardHeader>
          </Card>
        </div>

      </section>

      <section id="portfolio" className="border flex flex-col pt-12 items-center justify-center bg-[url('/images/bg-2.png')] bg-center bg-cover">
        <h1 className={title({ color: "blue", size: "sm" })}>Experiências Profissionais</h1>
        <div className="flex items-center justify-center w-full flex-col my-12">
          <Tabs aria-label="Dynamic tabs" items={tabs}>
            {(item) => (
              <Tab className="flex items-center justify-center" key={item.id} title={item.label}>
                <Card isBlurred className="max-md:w-[80%] md:w-[60%] lg:w-[50%] flex items-center justify-center">
                  <CardBody className="flex items-center justify-center">
                    <div role="button" onClick={() => setOpened(true)}><img className="hover:cursor-pointer " src={item.img} alt="" /></div>
                    {opened ? (
                      <Modal placement="center" size="5xl" isOpen={opened} onClose={() => setOpened(false)}>
                        <ModalContent>
                          <img className="" src={item.img} alt="" />
                        </ModalContent>
                      </Modal>
                    ) : null}
                  </CardBody>
                  <CardBody className={subtitle({ class: "text-sm", fullWidth: true })}>{item.content}</CardBody>
                </Card>
              </Tab>
            )}
          </Tabs>
        </div>

      </section>

      <section id="formacao" className="border relative flex items-center justify-center">

        <div className="w-full h-full absolute opacity-80 -z-20 bg-gradient-to-r from-white/10 to-[#ca8ff9]/40">
        </div>

        <div className="flex items-end justify-center">
          <div className="max-sm:hidden flex justify-center w-1/3 pt-24">
            <div><img className="" src="/images/design-smartphone.png" alt="" /></div>
          </div>
          <div className="flex w-2/3 max-sm:w-full flex-col text-center justify-center p-12 pb-24 items-center w-1/2  py-16">
            <h1 className={title({ color: "blue", size: "sm" })}>
              Tecnologias em alta no mercado
            </h1>
            <p className={subtitle({ class: "text-small" })}>Estou sempre atualizado com as tecnologias mais recentes, oferecendo soluções modernas e eficientes. Meu trabalho une design UI/UX e desenvolvimento, equilibrando estética e funcionalidade.</p>
            <div className="flex mt-12 grid grid-cols-4 gap-1 pb-12">

              <Tooltip content='Figma' color="secondary">
                <a href="https://www.figma.com/pt-br/">
                  <Card isBlurred className="h-full flex items-center justify-center  shadow-2xl rounded-xl transition-transform transform hover:scale-102 hover:shadow-lg hover:translate-y-[-5px]">
                    <img className="w-12" src="/images/figma.png" alt="" />
                  </Card>
                </a>
              </Tooltip>

              <Tooltip content="HTML5" color="secondary">
                <Card isBlurred className=" h-full flex items-center justify-center bg-[#efe6fa] rounded-xl transition-transform transform hover:scale-102 hover:shadow-lg hover:translate-y-[-5px]">
                  <img className="w-16" src="/images/html5.png" alt="" />
                </Card>
              </Tooltip>

              <Tooltip content="CSS3" color="secondary">
                <Card isBlurred className="h-full py-2 flex items-center justify-center bg-[#f4effb] shadow-2xl rounded-xl transition-transform transform hover:scale-102 hover:shadow-lg hover:translate-y-[-5px]">
                  <img className="w-12" src="/images/css.png" alt="" />
                </Card>
              </Tooltip>

              <Tooltip content='JavaScript' color="secondary">
                <Card isBlurred className=" h-full flex items-center justify-center bg-[#efe6fa] rounded-xl transition-transform transform hover:scale-102 hover:shadow-lg hover:translate-y-[-5px]">
                  <img className="w-16" src="/images/js-logo.png" alt="" />
                </Card>
              </Tooltip>

              <Tooltip content="Ruby" color="secondary" offset={-90}>
                <a href="https://www.ruby-lang.org/pt/">
                  <Card isBlurred className="h-full flex items-center justify-center bg-[#efe6fa] rounded-xl transition-transform transform hover:scale-102 hover:shadow-lg hover:translate-y-[-5px]">
                    <img className="w-11" src="/images/ruby.png" alt="" />
                  </Card>
                </a>
              </Tooltip>

              <Tooltip content="Docker" color="secondary" offset={-90}>
                <a href="https://www.docker.com/">
                  <Card isBlurred className=" h-full flex items-center justify-center bg-[#f4effb] shadow-2xl rounded-xl transition-transform transform hover:scale-102 hover:shadow-lg hover:translate-y-[-5px]">
                    <img className="w-14" src="/images/4373190_docker_logo_logos_icon.png" alt="" />
                  </Card>
                </a>
              </Tooltip>

              <Tooltip content="Tailwind CSS" offset={-90} color="secondary">
                <a href="https://tailwindui.com/">
                  <Card isBlurred className="h-full flex items-center justify-center bg-[#efe6fa] rounded-xl transition-transform transform hover:scale-102 hover:shadow-lg hover:translate-y-[-5px]">
                    <img className="w-12" src="/images/tailwindcss.png" alt="" />
                  </Card>
                </a>
              </Tooltip>

              <Card isBlurred className="h-full py-5 flex items-center justify-center bg-[#f4effb] shadow-2xl rounded-xl transition-transform transform hover:scale-102 hover:shadow-lg hover:translate-y-[-5px]">
                <h1 className="font-bold">+10</h1>
              </Card>

            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="flex flex-col items-center border pt-12 bg-[url('/images/bg-6.png')] bg-center bg-cover -z-20">
        <h1 className={title({ color: "blue", size: "sm" })}>Se interessou?</h1>
        <div className=" flex items-center justify-center">
          <Card className=" max-sm:w-[80%] px-12 py-6 mb-24 mt-12 z-10 rounded-lg flex items-center justify-center shadow-md">
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4 m-12">
              <Input
                isRequired
                errorMessage="Use um nome válido"
                label="Nome"
                labelPlacement="outside"
                name="name"
                placeholder="Digite seu nome"
                type="text"
                value={formData.name}
                onChange={handleChange}
              />
              <Input
                isRequired
                errorMessage="Use um email válido"
                label="Email"
                labelPlacement="outside"
                name="email"
                placeholder="Digite seu email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
              <Textarea
                isRequired
                name="message"
                type="message"
                placeholder="Digite sua mensagem"
                className="mt-2"
                value={formData.message}
                onChange={handleChange}
              />
              <div className="flex gap-2">
                <Button
                  color="secondary"
                  type="submit"
                  variant="ghost"
                  className="transition-transform transform hover:scale-102 hover:shadow-lg hover:translate-y-[-5px]"
                >
                  Enviar
                </Button>

              </div>

            </form>
          </Card>

        </div>
      </section>

    </div>
  );
}
