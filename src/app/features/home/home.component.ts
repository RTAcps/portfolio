import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../core/component/header/header.component';
import { FooterComponent } from '../../core/component/footer/footer.component';
import { Projects } from '../../../shared/models/projects';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent implements OnInit {
  projects: Projects[] = [
    {
      title: 'Simulador de Sorteio de 4 Jogos para a Lotofácil',
      image: './assets/images/0001.png',
      repositorio:'https://github.com/RTAcps/loto-sorteio',
      link: 'https://rtacps.github.io/loto-sorteio/',
      descricao: 'Este é um repositório que contém um simples simulador de sorteio que permite aos usuários realizar quatro jogos de sorteio simultaneamente, escolhendo 15 números de um conjunto de 25. O aplicativo exibe os números sorteados em ordem crescente para cada jogo.'
    },
    {
      title: 'Mega Sena Simulada',
      image: './assets/images/0002.png',
      repositorio: 'https://github.com/RTAcps/mega-sena',
      link: 'https://rtacps.github.io/mega-sena/',
      descricao: 'Este é um repositório que contém um simples simulador de sorteio que permite aos usuários realizar quatro jogos de sorteio simultaneamente, escolhendo 6 números de um conjunto de 60. O aplicativo exibe os números sorteados em ordem crescente para cada jogo.'
    },
    {
      title: 'Calculadora de Probabilidade',
      image: './assets/images/0003.png',
      repositorio: 'https://github.com/RTAcps/probabilidade-sorteio',
      link: 'https://rtacps.github.io/probabilidade-sorteio/',
      descricao: 'Este é um repositório que contém um simples estudo e entendimento sobre as probabilidades de acertar um conjunto de números em um sorteio. Para isso precisa fornecer 3 números: quantos números poderão ser sorteados, ou seja, total de números no conjunto, depois quantos números precisa acertar para ganhar (número de acertos desejados), por fim, quantos números irá escolher (número de escolhas).'
    },
  ];

  ngOnInit() {
    //
  }
}
