# 💻 Protótipo de Baixa Fidelidade: IBMEc Monitorias

## 1. Página Inicial (Rota: `/` ou `/home`)

A página inicial atua como um *dashboard* simples, mostrando uma saudação e os agendamentos mais recentes do usuário logado.

| Elemento | Descrição |
| :--- | :--- |
| **Cabeçalho/Navegação** | Nome do site (**IBMEc Monitorias**) no canto superior esquerdo. Links no canto superior direito: **Casa**, **Agendamento**, **Login** (ou **Logout** se o usuário estiver logado). |
| **Título Central** | `Bem-vindo ao IBMEc Monitorias` |
| **Subtítulo/Descrição** | `Plataforma para agendar monitorias com facilidade` |
| **Seção** | `Últimos agendamentos` |
| **Lista de Agendamentos** | `[Agendamento 1]` |
| | - **Dados:** [Data do Agendamento] |
| | - **Aluno:** [Nome do Aluno/Deixar vazio ou ocultar se não for relevante para a visualização do aluno] |
| | - [ Botão: **Remover** ] (à direita do agendamento) |
| | `[Agendamento 2]` |
| | - **Dados:** [Data do Agendamento] |
| | - **Aluno:** [Nome do Aluno] |
| | - [ Botão: **Remover** ] (à direita do agendamento) |

---

## 2. Página de Login (Rota: `/login`)

A tela de autenticação para o acesso à plataforma.

| Elemento | Descrição |
| :--- | :--- |
| **Cabeçalho/Navegação** | Links: **Casa**, **Agendamento**, **Login**. |
| **Título Central** | `Login` |
| **Campo de Entrada** | `Email: [ ]` |
| **Campo de Entrada** | `Senha: [ ]` |
| **Botão Principal** | `(Entrar) [ Botão ]` |
| **Link/Botão** | `Criar conta` (Link para a página de cadastro) |

---

## 3. Criação de Conta (Rota: `/register`)

A tela para novos usuários se cadastrarem na plataforma.

| Elemento | Descrição |
| :--- | :--- |
| **Cabeçalho/Navegação** | Links: **Casa**, **Agendamento**, **Login** (ou **Logout**). |
| **Título Principal** | `Criar Conta` (ou `Cadastro de Usuário`) |
| **Campo de Entrada** | `Nome Completo: [ ]` |
| **Campo de Entrada** | `Email: [ ]` |
| **Campo de Entrada** | `Senha: [ ]` |
| **Campo de Entrada** | `Confirmar Senha: [ ]` |
| **Campo de Seleção** | `Tipo de Usuário: [ ]` (Opções: Aluno, Monitor/Professor) |
| **Botão Principal** | `(Cadastrar) [ Botão ]` |
| **Link** | `Já tem uma conta? Entrar` (Link de volta para a página de Login) |

---

## 4. Página de Agendamento (Rota: `/scheduler`)

O *hub* principal para ver os monitores, suas especialidades e agendar horários.

| Elemento | Descrição |
| :--- | :--- |
| **Cabeçalho/Navegação** | Links: **Casa**, **Agendamento**, **Login** (ou **Logout**). |
| **Título Principal** | `Agendamento de Monitorias` |
| **Seção 1: Filtro/Disciplinas** | **Matérias** |
| | * Matemática |
| | * Física |
| | * Química |
| **Seção 2: Monitores** | Lista de perfis de monitores em um *grid* ou lista: |
| | **Prof. Ana Souza** |
| | - `Especialista em cálculo e álgebra.` |
| | - [ Botão: **Ver perfil** ] |
| | - [ Botão: **Lista de exercícios** ] |
| | - [ Botão: **Agendar** ] |
| | **Prof. Bruno Lima** |
| | - `Aproximação intuitiva da matemática e física.` |
| | - [ Botão: **Ver perfil** ] |
| | - [ Botão: **Lista de exercícios** ] |
| | - [ Botão: **Agendar** ] |
| **Seção 3: Calendário** | **Calendário de disponibilidade** |
| | Lista de datas de disponibilidade (ex: `Prof. Ana Souza: 2025-11-20 » 2025-11-23`) |

---

## 5. Meu Perfil (Rota: `/perfil`)

Tela onde o usuário pode visualizar e gerenciar seus dados pessoais e de conta.

| Elemento | Descrição |
| :--- | :--- |
| **Cabeçalho/Navegação** | Links visíveis após o login: **Casa**, **Agendamento**, **Meu Perfil**, **Painel do Monitor** (se for Monitor), **Sair**. |
| **Título Principal** | `Meu Perfil` |
| **Informação** | **Nome:** [Nome do Usuário logado] |
| **Informação** | **E-mail:** [Email do Usuário logado] |
| **Informação** | **Papel:** [Monitor/Aluno] |
| **Botão** | [ Botão: **Editar Dados** ] (Cor primária/azul) |
| **Botão** | [ Botão: **Excluir Conta** ] (Cor de alerta/vermelho) |

---

## 6. Painel do Monitor (Rota: `/monitor`)

A tela específica para o usuário com o papel de Monitor/Professor, mostrando seus agendamentos e informações relevantes.

| Elemento | Descrição |
| :--- | :--- |
| **Cabeçalho/Navegação** | Links visíveis após o login: **Casa**, **Agendamento**, **Meu Perfil**, **Painel do Monitor**, **Sair**. |
| **Título Principal** | `Painel do Monitor` |
| **Saudação** | `Olá, [Nome do Monitor], estes são os alunos agendados para sua matéria.` |
| **Lista de Agendamentos** | Exibe a lista de agendamentos. |
| **Cenário Vazio** | `Nenhum aluno agendado ainda` (Exibido se a lista de agendamentos estiver vazia) |
| **Ação/Funcionalidade** | *Sugestão:* [ Botão: **Gerenciar Disponibilidade** ] (Para o Monitor atualizar o calendário de `/scheduler`) |
| **Ação/Funcionalidade** | *Sugestão:* [ Botão: **Ver Lista de Exercícios** ] (Para o Monitor gerenciar o conteúdo) |
