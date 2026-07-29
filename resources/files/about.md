## Robert C. Martin
### Uncle Bob

Robert C. Martin has been writing software since 1964 and working as a professional programmer since 1969. His career spans mechanical computers, relay logic, punched cards, minicomputers, assembly language, C, C++, object-oriented design, Agile methods, functional programming, software craftsmanship, books, training, and video education.

### Early Programming

Martin's first computer was a Digi-Comp I, a three-bit mechanical computer that he programmed at age twelve. He learned Boolean algebra from the advanced programming manual, then moved on to relays, transistors, integrated circuits, COBOL, FORTRAN, PL/1, PDP-8 assembly, and operations research texts. In high school he and friends built an 18-bit binary calculator that won first prize at the Illinois State Science Fair.

### A.S.C. Tabulating

Martin's first paid programming work was at A.S.C. Tabulating in Lake Bluff, Illinois.

* **Illinois State Scholarship Commission tape conversion.** As a temporary summer programmer, he wrote Honeywell H-200 EASYCODER assembly to read student records from magnetic tape, assign sequential student IDs, and write the updated records to a new tape.

* **Local 705 accounting system.** Returning as a programmer analyst, he joined the team that replaced a GE Datanet 30 system with a Varian 620F minicomputer. The team wrote the operating system, accounting system, modem management system, disk management system, overlay loader, and application code in assembly language.

### Teradyne Applied Systems

Martin joined Teradyne Applied Systems in 1973. The work centered on computer-controlled laser trimming systems.

* **Laser trimming systems.** He wrote assembler for Teradyne minicomputers controlling CO2 laser systems that trimmed electronic components to precise resistance values.

### Outboard Marine Corporation

Martin worked at Outboard Marine Corporation in Waukegan, Illinois, on factory automation for the company's manufacturing operations.

* **IBM System/7 shop-floor control.** He programmed an IBM System/7 to monitor die-casting machines that produced parts for Lawnboy lawnmowers and Johnson outboard motors. The system counted pieces, timed mold cycles, reported scrap, and gathered data through a local network connected to machines and reporting stations on the plant floor.

* **IBM 370 batch development workflow.** Because the System/7 had no native compiler, source editing and assembly were done through an IBM 370 mainframe. Programmers punched edit directives and compile jobs, waited for the 370 batch queue, received binaries over a private connection to the System/7, and debugged with the System/7 front panel.

* **Structured Programming course.** After reading an article on structured programming, Martin wrote a one-day training class and delivered it to an OMC programming team in St. Louis. It was his first business trip as a trainer and an early preview of his later career as an instructor and consultant.

### Teradyne Central/Telecommunications Division

At Teradyne Central, Martin worked on telephone service automation, voice technology, development tools, and team leadership.

* **4-TEL distributed telephone testing.** He worked on 4-TEL, a distributed telephone-line quality measurement system. A Service Area Computer in the telephone-company service center communicated over modem lines with Central Office Line Testers in telephone central offices. Those line testers could dial a subscriber line without ringing it, measure AC and DC characteristics, estimate line length, detect faults, and report results back to the service center.

* **4-TEL real-time software.** He wrote M365 assembly for the Service Area Computer and Central Office Line Tester software. The system used a polling, event-driven task switcher with processes for terminals, modem traffic, timed events, screen output, and other asynchronous work.

* **8085 COLT migration.** He helped replace the M365-based Central Office Line Tester with a smaller Intel 8085 implementation. The migration translated COLT software from M365 assembly to 8085 assembly, reduced the field hardware to a compact ROM/RAM-based industrial enclosure, and lowered power, size, and service burden in central-office environments.

* **EEPROM/ROM vectoring.** To make field updates possible despite ROM-based deployment, the team used RAM vector tables that pointed to routines in ROM. Calls went through vectors initialized at boot, allowing selected routines to be redirected without replacing the whole ROM image.

* **Development environment migration.** He helped move M365 and 8085 development from magnetic tape cartridges and M365-hosted assemblers to PDP-11/VAX tooling, improving editing, assembly, compile queuing, and binary download workflows.

* **Electronic Receptionist.** He helped design and prototype an early digital voice-mail and call-management system. The system used custom hardware, embedded processors, C, assembly, voice storage, touch-tone control, and a small Forth-like diagnostic interpreter.

* **Voice Response System.** He helped redirect the voice-mail technology into a commercial product for telephone companies. Repair craftspeople could call into the system, drive fault-location procedures by touch tone, and receive spoken instructions and dispatch information.

* **Craft Dispatch System.** He worked on integrating voice response with telephone-company trouble-ticket systems. The project required interpreting semi-structured dispatch data, transforming it for voice output, and allowing customers to configure dispatch workflows.

* **Field Labeled Data and state machines.** To represent complex hierarchical ticket data, Martin devised a compact field-labeled string format and used state-transition tables to configure customer-specific workflows without rewriting application code.

* **Macintosh, Smalltalk, C, and object orientation.** Outside the main product work he studied Smalltalk, learned the Macintosh GUI framework, wrote C programs for the Mac, and began the transition toward object-oriented design.

* **Bracknell software team.** In 1988 he moved with his family to England to lead Teradyne's Bracknell software development team while continuing to code during early-morning hours.

### Clear Communications

After returning from England, Martin joined Clear Communications, a startup building network monitoring products.

* **Clearview.** He worked on a Unix and C/C++ graphical system for monitoring T1 networks. The product displayed network maps, line status, and error histories on Sun workstations.

* **C++ training and newsgroups.** As C++ became practical on Sun systems, he taught the local team and became active on `comp.object` and `comp.lang.c++`, where his articles and discussions built an early public audience.

* **The C++ Report.** During this period he began submitting articles to The C++ Report, starting a long association with the magazine.

### Rational and Independent Consulting

In 1993 Martin became an independent consultant.

* **Rational Rose.** He consulted with Rational on Rose, the CASE tool for drawing Booch object-oriented design diagrams. The project used C++, object-oriented databases, graphical modeling, and SparcStation development.

* **First book contract.** While working with Rational, he pitched and began writing _Designing Object-Oriented C++ Applications Using the Booch Method_, published in 1995.

* **Educational Testing Service and NCARB.** He consulted with ETS on an automated architectural licensing examination for NCARB. The work involved C++, object-oriented GUI applications, scoring programs, fuzzy-logic-style inference, and a reusable framework that eventually supported 18 examination vignettes.

### Object Mentor

Martin co-founded Object Mentor Inc. with Jim Newkirk as demand grew for consulting and training.

* **C++ and object-oriented training.** Object Mentor taught C++, Java, object-oriented design, and design principles to companies across the United States and abroad, including Xerox, General Motors, Nortel, Stanford SLAC, Lawrence Berkeley Labs, and others.

* **SOLID and component principles.** In the mid-1990s Martin refined and taught the design principles that became the SOLID and component principles: dependency management, abstraction, stability, cohesion, and reuse.

* **C++ Report column and editorship.** He wrote the Object-Oriented Design column and later served as editor-in-chief of The C++ Report.

* **Patterns and conferences.** He participated in the early design-patterns community, reviewed early Pattern Languages of Programming work, published conference papers, and became a frequent invited speaker.

* **XP Immersion.** In 1999 he worked with Kent Beck and others to create the XP Immersion, a five-day intensive Extreme Programming course combining training, exercises, evening talks, and consulting.

### Agile Manifesto and Agile Alliance

Martin helped convene the 2001 Snowbird meeting that produced the Agile Manifesto. Shortly afterward, the first Agile Alliance meeting was held at the Object Mentor office near Chicago, and Martin served as the organization's first chairman.

### Books, Clean Code, and Later Consulting

After the dot-com crash and the decline of Object Mentor's training business, Martin continued as an author, consultant, trainer, and speaker.

* **_Agile Software Development: Principles, Patterns, and Practices_.** Published in 2003, this book gathered object-oriented design, principles, patterns, practices, and Agile ideas into a broad technical treatment.

* **_Clean Code_.** Written after nearly four decades of programming, this book collected the coding techniques and disciplines that Martin had found useful throughout his career.

* **Independent consulting.** After Object Mentor closed in 2008, Martin continued consulting, training, and speaking for software organizations around the world.

* **Functional programming and Clojure.** His study of _Structure and Interpretation of Computer Programs_ led him into Scheme, Clojure, and functional programming.

### Clean Coders

In 2009 Martin co-founded Clean Coders Inc. with his son Micah Martin.

* **Online training platform.** Micah built the web and hosting platform while Martin produced scripted, edited training videos for software developers.

* **Clean Code video series.** With help from his daughter Angela Brooks on filming and editing, Martin produced 79 hours of lectures and demonstrations on code, design, architecture, professionalism, craftsmanship, and Agile practice.

### Selected Books

* _Designing Object-Oriented C++ Applications Using the Booch Method_
* _Agile Software Development: Principles, Patterns, and Practices_
* _Agile Principles, Patterns, and Practices in C#_
* _UML for Java Programmers_
* _Clean Code_
* _The Clean Coder_
* _Clean Architecture_
* _Clean Agile_
* _Clean Craftsmanship_
* _Functional Design_
* _We, Programmers_

### Industry Contributions

* Co-author of the Agile Manifesto.
* First chairman of the Agile Alliance.
* Co-founder of Object Mentor Inc.
* Co-founder of Clean Coders Inc.
* Former editor-in-chief of The C++ Report.
* Author, speaker, trainer, and consultant on clean code, software design, architecture, Agile, professionalism, craftsmanship, and functional design.
