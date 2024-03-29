import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../core/component/header/header.component';
import { FooterComponent } from '../../core/component/footer/footer.component';
import { Projects } from '../../../shared/models/projects';
import { NgOptimizedImage, SlicePipe } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    NgOptimizedImage,
    SlicePipe,
    ReactiveFormsModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass',
})
export class HomeComponent implements OnInit {
  projects: Projects[] = [
    {
      title: 'Cine Tech',
      image: './assets/images/0004.png',
      repositorio: 'https://github.com/RTAcps/cinetech',
      link: 'https://cinetechmovie.netlify.app/',
      descricao:
        'Front-end Test Developer: pesquisa sobre um título de filme pesquisado. Foi desenvolvido em Angular, Typescript, SCSS e Bootstrap.',
      width: 688,
      height: 591.25,
      max: 20,
    },
    {
      title: 'Simulador de Sorteio de 4 Jogos para a Lotofácil',
      image: './assets/images/0001.png',
      repositorio: 'https://github.com/RTAcps/loto-sorteio',
      link: 'https://rtacps.github.io/loto-sorteio/',
      descricao:
        'Este é um repositório que contém um simples simulador de sorteio que permite aos usuários realizar quatro jogos de sorteio simultaneamente, escolhendo 15 números de um conjunto de 25. O aplicativo exibe os números sorteados em ordem crescente para cada jogo.',
      width: 625,
      height: 584,
      max: 20,
    },
    {
      title: 'Mega Sena Simulada',
      image: './assets/images/0002.png',
      repositorio: 'https://github.com/RTAcps/mega-sena',
      link: 'https://rtacps.github.io/mega-sena/',
      descricao:
        'Este é um repositório que contém um simples simulador de sorteio que permite aos usuários realizar quatro jogos de sorteio simultaneamente, escolhendo 6 números de um conjunto de 60. O aplicativo exibe os números sorteados em ordem crescente para cada jogo.',
      width: 1458,
      height: 584,
      max: 9,
    },
    {
      title: 'Calculadora de Probabilidade',
      image: './assets/images/0003.png',
      repositorio: 'https://github.com/RTAcps/probabilidade-sorteio',
      link: 'https://rtacps.github.io/probabilidade-sorteio/',
      descricao:
        'Este é um repositório que contém um simples estudo e entendimento sobre as probabilidades de acertar um conjunto de números em um sorteio. Para isso precisa fornecer 3 números: quantos números poderão ser sorteados, ou seja, total de números no conjunto, depois quantos números precisa acertar para ganhar (número de acertos desejados), por fim, quantos números irá escolher (número de escolhas).',
      width: 673,
      height: 584,
      max: 11,
    },
  ];

  public contactForm = this.fb.group({
    name: '',
    email: '',
    message: '',
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    //
  }

  public onSubmit(): void {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: 'success',
      title: 'Mensagem enviada com sucesso!',
    });
  }
}
