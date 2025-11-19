💻 Protótipo de Baixa Fidelidade: IBMEc Monitorias
1. Página Inicial (Rota: / ou /home)
A página inicial atua como um dashboard simples, mostrando uma saudação e os agendamentos mais recentes do usuário logado.

Cabeçalho/Navegação,"Nome do site (IBMEc Monitorias) no canto superior esquerdo. Links no canto superior direito: Casa, Agendamento, Login (ou Logout se o usuário estiver logado)."
Título Central - Bem-vindo ao IBMEc Monitorias
Subtítulo/Descrição - Plataforma para agendar monitorias com facilidade
Seção - Últimos agendamentos
Lista de Agendamentos - [Agendamento 1]
,- Dados: [Data do Agendamento]
,- Aluno: [Nome do Aluno/Deixar vazio ou ocultar se não for relevante para a visualização do aluno]
,- [ Botão: Remover ] (à direita do agendamento)
   -  ,[Agendamento 2]
,- Dados: [Data do Agendamento]
,- Aluno: [Nome do Aluno]
,- [ Botão: Remover ] (à direita do agendamento)
------------------------------------------------------------------------------------------------------------------

2. Página de Login (Rota: /login)

Cabeçalho/Navegação,"Links: Casa, Agendamento, Login."
Título Central,Login
Campo de Entrada - Email: [ ]
Campo de Entrada - Senha: [ ]
Botão Principal - (Entrar) [ Botão ]
Link/Botão - Criar conta (Link para a página de cadastro)
-----------------------------------------------------------------------------------------------------------------

3. Página de Agendamento (Rota: /scheduler)
O hub principal para ver os monitores, suas especialidades e agendar horários.

Cabeçalho/Navegação - "Links: Casa, Agendamento, Login (ou Logout)."
Título Principal - Agendamento de Monitorias
Seção 1: Filtro/Disciplinas, Matérias
,* Matemática
,* Física
,* Química
Seção 2: Monitores - Lista de perfis de monitores em um grid ou lista:
,Prof. Ana Souza
,- Especialista em cálculo e álgebra.
,- [ Botão: Ver perfil ]
,- [ Botão: Lista de exercícios ]
,- [ Botão: Agendar ]
,Prof. Bruno Lima
,- Aproximação intuitiva da matemática e física.
,- [ Botão: Ver perfil ]
,- [ Botão: Lista de exercícios ]
,- [ Botão: Agendar ]
,"(Repetir bloco para todos os monitores: Carla Reis, Diego Alves, Elisa Moraes...)"
Seção 3: Calendário, Calendário de disponibilidade
Lista de datas de disponibilidade (ex: Prof. Ana Souza: 2025-11-20 » 2025-11-23)
---------------------------------------------------------------------------------------------------------------

📄 Protótipo de Baixa Fidelidade: IBMEc Monitorias - Criação de Conta).

Cabeçalho/Navegação,"Links: Casa, Agendamento, Login (ou Logout)."
Título Principal - Criar Conta (ou Cadastro de Usuário)
Campo de Entrada - Nome Completo: [ ]
Campo de Entrada - Email: [ ] (Deve ser um endereço de email válido)
Campo de Entrada - "Senha: [ ] (Recomendação: mostrar requisitos de segurança, ex: 8+ caracteres)"
Campo de Entrada - Confirmar Senha: [ ] (Para garantir que a senha foi digitada corretamente)
Campo de Seleção - "Tipo de Usuário: [ ] (Opções: Aluno, Monitor/Professor) - Este campo é opcional, mas útil para diferenciar permissões."
Botão Principal - (Cadastrar) [ Botão ]
Link - Já tem uma conta? Entrar (Link de volta para a página de Login)

