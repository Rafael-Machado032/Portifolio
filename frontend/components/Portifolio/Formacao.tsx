'use client';
import { useRef, useEffect } from 'react';
import { motion, useMotionValue } from "motion/react";
import Cont_Formacao from '../Container/Cont_Formacao';
import { useFormacao } from '@/context/FormacaoContext';

export default function Formacao() {
    const { formacaoDados } = useFormacao()
    const divRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);

    const projetoDublicado = [...formacaoDados, ...formacaoDados]


    useEffect(() => {
        if (!divRef.current) return;

        // Pega a largura de um bloco inteiro de cards originais
        const tamTotal = divRef.current.scrollWidth / 2;
        
        const desativarEspiao = x.on("change", (posAtual) => {

            // console.log("Posição Atual: ", posAtual);
            // console.log("Tamanho Total: ", tamTotal);

            // Se arrastar para a esquerda além do bloco original
            if (posAtual <= -tamTotal) {
                x.set(posAtual + tamTotal);
            }

            // Se arrastar para a direita além do início
            if (posAtual >= 0) {
                x.set(posAtual - tamTotal);
            }
        })
        return () => desativarEspiao();
    }, [x])

    return (
        <section className='flex justify-center px-6 pt-6 pb-10 dark:text-[#e1e1e6] overflow-hidden scroll-mt-16 bg-radial bg-[radial-gradient(circle_at_center,rgba(113,89,193,0.6)_0%,transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(113,89,193,0.1)_0%,transparent_70%)]' id="formacao" >
            <div className='w-full'>
                <motion.h2
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                        type: "tween",             // Desativa a física de mola
                        ease: [0.68, -0.75, 0.27, 1.75], // Curva que força o elemento a passar do ponto e voltar
                        duration: 0.5             // Tempo em segundos para completar o movimento
                    }}
                    className='max-w-7xl mx-auto text-4xl font-bold after:content-[""] after:block after:w-12 after:h-1 after:bg-[#00858c] dark:after:bg-[#00f2fe] after:mt-2 mb-10'
                >
                    Formação
                </motion.h2>

                {/* Container do Slider */}
                <motion.div
                    ref={divRef}
                    style={{ x }}
                    className="flex items-start shrink-0 gap-6 cursor-grab active:cursor-grabbing"
                    drag="x" // Permite arrastar no eixo X
                    whileTap={{ cursor: "grabbing" }}
                >
                    {projetoDublicado.map((item, index) => (
                        <Cont_Formacao key={`${item.id}-${index}`} formacaoDados={item} />
                    ))}
                </motion.div>

                {/* Dica visual para o usuário */}
                <p className="text-sm text-center sm:text-start text-[#5c5c61] dark:text-[#a8a8b3] mt-6 animate-pulse max-w-7xl mx-auto">
                    ← Arraste para explorar →
                </p>
            </div>
        </section>
    );
}
