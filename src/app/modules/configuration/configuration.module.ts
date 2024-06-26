import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ColorPickerModule } from 'ngx-color-picker';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { HighlightModule } from 'ngx-highlightjs';
import { ConfigurationLayoutComponent } from './configuration-layout/configuration-layout.component';
import { ConfigurationRoutingModule } from './configuration.routing';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { ChatbotAccessComponent } from './chatbot-access/chatbot-access.component';
import { ChatbotConfigComponent } from './chatbot-config/chatbot-config.component';
import { ChatbotUsersComponent } from './chatbot-users/chatbot-users.component';
import { UserFormComponent } from './chatbot-users/user-form/user-form.component';
import { ChatbotPreviewComponent } from './chatbot-config/chatbot-preview/chatbot-preview.component';
import { ChatbotEmbeddedPreviewComponent } from './chatbot-config/chatbot-embedded-preview/chatbot-embedded-preview.component';
import { ChatbotTechComponent } from './chatbot-tech/chatbot-tech.component';
import { ChatbotTrainingComponent } from './chatbot-training/chatbot-training.component';

@NgModule({
  declarations: [
    ConfigurationLayoutComponent,
    ChatbotAccessComponent,
    ChatbotConfigComponent,
    ChatbotUsersComponent,
    UserFormComponent,
    ChatbotPreviewComponent,
    ChatbotEmbeddedPreviewComponent,
    ChatbotTechComponent,
    ChatbotTrainingComponent,
  ],
  imports: [
    CommonModule,
    ConfigurationRoutingModule,
    MaterialModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
    ColorPickerModule,
    ClipboardModule,
    HighlightModule,
  ],
  providers: [{ provide: Window, useValue: window }],
})
export class ConfigurationModule {}
