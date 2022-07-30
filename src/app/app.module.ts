import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ExperienceComponent } from './components/experience-section/experience/experience.component';
import { EducationComponent } from './components/education-section/education/education.component';
import { SkillsComponent } from './components/skills-section/skills/skills.component';
import { ProyectsComponent } from './components/proyect-section/proyects/proyects.component';
import { ProyectItemComponent } from './components/proyect-section/proyect-item/proyect-item.component';
import { EducationItemComponent } from './components/education-section/education-item/education-item.component';
import { SkillItemComponent } from './components/skills-section/skill-item/skill-item.component';
import { ExperienceItemComponent } from './components/experience-section/experience-item/experience-item.component';
import { BotonEditionComponent } from './components/boton-edition/boton-edition.component';
import { BotonOnliEditComponent } from './components/boton-onli-edit/boton-onli-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigatorComponent,
    AboutMeComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ProyectsComponent,
    ProyectItemComponent,
    EducationItemComponent,
    SkillItemComponent,
    ExperienceItemComponent,
    BotonEditionComponent,
    BotonOnliEditComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
