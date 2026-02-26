import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { MockData } from '../../../shared/models/projects';
import { mockData } from '../data/mock';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private readonly dataSubject = new BehaviorSubject<MockData | null>(null);
  public data$ = this.dataSubject.asObservable();

  constructor(private readonly translate: TranslateService) {
    this.translate.onLangChange.subscribe(() => {
      this.loadData();
    });

    this.loadData();
  }

  private loadData(): void {
    this.translate.get('data').pipe(
      map((translatedData: any) => ({
        hero: {
          name: translatedData.hero.name,
          title: translatedData.hero.title,
          subtitle: translatedData.hero.subtitle,
          description: translatedData.hero.description,
          location: translatedData.hero.location,
          availability: mockData.hero.availability,
        },
        about: {
          bio: translatedData.about.bio,
          highlights: translatedData.about.highlights,
        },
        experiences: translatedData.experiences.map((exp: any, index: number) => ({
          id: index + 1,
          company: exp.company,
          position: exp.position,
          period: exp.period,
          description: exp.description,
          technologies: mockData.experiences[index]?.technologies || [],
        })),
        technologies: mockData.technologies,
        projects: translatedData.projects.map((proj: any, index: number) => ({
          id: index + 1,
          title: proj.title,
          description: proj.description,
          technologies: mockData.projects[index]?.technologies || [],
          image: mockData.projects[index]?.image || '',
          link: mockData.projects[index]?.link || '#',
          github: mockData.projects[index]?.github || '#',
          status: mockData.projects[index]?.status || 'published',
        })),
        education: translatedData.education.map((edu: any, index: number) => ({
          id: index + 1,
          institution: edu.institution,
          degree: edu.degree,
          field: edu.field,
          year: edu.year,
          description: edu.description,
        })),
        curiosities: translatedData.curiosities.map((cur: any, index: number) => ({
          id: index + 1,
          title: cur.title,
          description: cur.description,
          icon: mockData.curiosities[index]?.icon || 'sparkles',
        })),
        contact: mockData.contact,
      }))
    ).subscribe((data) => {
      this.dataSubject.next(data);
    });
  }

  getData(): Observable<MockData | null> {
    return this.data$;
  }
}

