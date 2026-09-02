const STORAGE_KEY = "libertometro-state-v13";

const beliefs = [
  { id: "no_state", text: "El Estado no debería existir." },
  { id: "taxes_theft", text: "Todos los impuestos son robo." },
  { id: "poor_choice", text: "El pobre es pobre porque quiere." },
  { id: "anti_welfare", text: "No me gustan los planeros." },
  { id: "market_self", text: "La economía se regula sola." },
  { id: "public_university_cost", text: "La universidad pública es un gasto innecesario de mi bolsillo." },
  { id: "private_contracts", text: "Todo debería pactarse entre privados sin intervención estatal." },
  { id: "privatize_all", text: "Hay que privatizar todo lo estatal." },
  { id: "no_subsidies", text: "No deberían existir subsidios." },
  { id: "private_health", text: "La salud pública no debería existir porque la privada es mejor." },
  { id: "no_labor_laws", text: "Las leyes laborales traban la libertad de contratar." },
  { id: "no_price_controls", text: "No debe haber controles de precios ni regulación de tarifas." },
  { id: "no_environment", text: "Las regulaciones ambientales son trabas al progreso." },
  { id: "foreign_resources", text: "Si una empresa extranjera compra recursos naturales, es libertad de mercado." },
  { id: "meritocracy", text: "Absolutamente todos tenemos las mismas oportunidades. Meritocracia team." },
  { id: "private_security", text: "La seguridad privada sería más eficiente que la pública." },
  { id: "private_justice", text: "Los conflictos deberían resolverse por árbitros privados." },
  { id: "education_market", text: "La educación debería competir como cualquier producto." },
  { id: "private_roads", text: "Calles, rutas y trenes deberían ser privados." },
  { id: "anti_unions", text: "Los sindicatos solo extorsionan." },
  { id: "public_workers", text: "Los empleados públicos son ñoquis." },
  { id: "capital_without_flag", text: "El capital debe circular libremente, sin patriotismo económico." },
  { id: "state_bad_manager", text: "El Estado no sabe administrar nada." },
  { id: "no_inherited_costs", text: "No quiero pagar gastos que decidió otra persona." },
  { id: "no_external_effects", text: "Mientras yo no firme ni cobre, lo que hagan otros no debería convertirse en mi problema." },
  { id: "presidential_cabinet", text: "Confío en el gabinete libertario aunque incluya nombres de la política tradicional." },
  { id: "climate_socialist_lie", text: "El calentamiento global es otra mentira del socialismo." },
  { id: "future_debt_theft", text: "Si el gobierno libertario necesita pedir deuda porque los K se robaron todo, está bien." },
  { id: "disappeared_number_indignation", text: "Me indigna que se use la cifra de 30.000 desaparecidos como relato político." },
  { id: "selfish_indifference", text: "A mí no me importa lo que le pase a otros mientras no me jodan a mí." },
  { id: "abortion_birthrate_belief", text: "Aborto legal: ahora lo estamos pagando con caídas en la tasa de natalidad." },
  { id: "anti_communism", text: "Me cae mal el comunismo y no habría que negociar con comunistas." },
  { id: "milei_voter", text: "Acompaño a Milei aunque cambie de postura, porque el rumbo importa más." }
];

const defaultSources = [
  {
    label: "Chequeado: qué es el libertarismo",
    url: "https://chequeado.com/el-explicador/que-es-el-libertarismo/"
  },
  {
    label: "Economipedia: libertarismo",
    url: "https://economipedia.com/definiciones/libertarismo.html"
  }
];

function makeCorruptionReply(scope) {
  return {
    label: "Pero ese tipo de gobierno se robó todo",
    value: `${scope}_previous_stole`,
    checks: [
      {
        id: `${scope}_previous_theft_excuse`,
        anyBeliefs: ["taxes_theft", "state_bad_manager", "presidential_cabinet"],
        title: "Robo selectivo",
        detail: "Si el anterior robó, eso no vuelve correcto que el actual use esa excusa para justificar contradicciones, ajustes opacos o acuerdos con la misma estructura política que decía venir a desplazar.",
        sources: [
          { label: "Chequeado: qué es el libertarismo", url: "https://chequeado.com/el-explicador/que-es-el-libertarismo/" }
        ],
        replies: [
          {
            label: "Pero antes había más inflación y ahora la inflación es cero",
            value: `${scope}_zero_inflation`,
            checks: [
              {
                id: `${scope}_official_inflation_data`,
                anyBeliefs: ["presidential_cabinet", "milei_voter"],
                title: "Los datos oficiales no dicen cero",
                detail: "Según INDEC, el IPC nacional de julio de 2026 fue 2,1% mensual. Tomando el índice de noviembre de 2023 en 2816,06 y julio de 2026 en 12076,39, la variación acumulada aproximada es 328,8%, no cero. En tipo de cambio, el BCRA informó A3500 a $364,41 el 7/12/2023 y sus indicadores principales mostraban $1492,1790 el 11/08/2026, una suba aproximada de 309,5%.",
                sources: [
                  { label: "INDEC IPC", url: "https://www.indec.gob.ar/Nivel4/Tema/3/5/31" },
                  { label: "API oficial de series", url: "https://www.argentina.gob.ar/datos-abiertos/api-series-de-tiempo" },
                  { label: "BCRA A3500", url: "https://www.bcra.gob.ar/tipo-cambio-referencia-comunicacion-a-3500-tcnpm/" }
                ]
              }
            ]
          },
          {
            label: "No me va ni me viene este tema puntual",
            value: `${scope}_indifferent`,
            checks: [
              {
                id: `${scope}_strategic_indifference`,
                anyBeliefs: ["taxes_theft", "market_self", "state_bad_manager", "presidential_cabinet"],
                title: "Indiferencia táctica",
                detail: "Cuando el tema toca salud, educación, tarifas o corrupción, correrte diciendo que no te va ni te viene contradice haber marcado principios generales fuertes al inicio."
              }
            ]
          }
        ]
      }
    ]
  };
}

function makeCaptchaReply(scope) {
  return {
    label: "Segui llorando kuka",
    value: `${scope}_kuka_bot_escape`,
    captcha: {
      id: `${scope}_kuka_bot_check`,
      title: "Lo sentimos, estábamos casi seguros de que se trataba de un bot",
      detail: "Lo sentimos, estábamos casi seguros de que se trataba de un bot."
    }
  };
}

const questions = [
  {
    id: "street_holes",
    title: "Pozos en la calle",
    prompt: "¿Te molestan los pozos de las calles que usás con tu auto día a día?",
    context: "Una calle rota afecta autos, ambulancias, bicis y peatones. La pregunta parece simple hasta que aparece quién tiene obligación de arreglarla.",
    answers: [
      {
        label: "Sí, alguien debería arreglarlos",
        value: "street_yes",
        checks: [
          {
            id: "street_no_state",
            anyBeliefs: ["no_state", "private_roads", "taxes_theft"],
            title: "Error de consistencia",
            detail: "Si el Estado no debe existir, si las calles son privadas o si todo impuesto es robo, no queda una obligación común clara para mantener la calle que usás todos los días.",
            replies: [
              {
                label: "Aprendería a pavimentar mi calle",
                value: "learn_paving",
                checks: [
                  {
                    id: "street_university",
                    anyBeliefs: ["public_university_cost", "education_market"],
                    title: "Inconsistencia educativa",
                    detail: "Para aprender ingeniería vial en serio necesitarías formación, laboratorios, docentes y práctica. Si rechazaste la universidad pública, tendrías que pagar todo eso de tu bolsillo antes de tapar un pozo.",
                    replies: [
                      {
                        label: "Miraría tutoriales gratis",
                        value: "youtube_paving",
                        checks: [
                          {
                            id: "street_tutorial_quality",
                            anyBeliefs: ["market_self", "no_state"],
                            title: "Control de calidad ausente",
                            detail: "Si la calle queda mal y alguien se lastima, volvés a necesitar inspección, responsabilidad civil, justicia y reglas compartidas. El tutorial no reemplaza una obra pública controlada. Imaginate si fuera un puente lo que armaste con tutoriales."
                          }
                        ]
                      },
                      {
                        label: "Pagaría un curso privado",
                        value: "private_course_paving",
                        checks: [
                          {
                            id: "street_private_cost",
                            anyBeliefs: ["poor_choice", "meritocracy"],
                            title: "Meritocracia con barrera de entrada",
                            detail: "Tu solución funciona solo para quien puede pagar formación, herramientas y materiales. Para el resto, la calle rota se convierte en castigo por no tener capital inicial."
                          }
                        ]
                      },
                      makeCaptchaReply("street")
                    ]
                  }
                ]
              },
              {
                label: "Que lo arregle cada frentista",
                value: "front_owner_pays",
                checks: [
                  {
                    id: "street_front_owner",
                    anyBeliefs: ["private_contracts", "poor_choice", "no_inherited_costs", "no_external_effects"],
                    title: "Costo heredado",
                    detail: "La ambulancia, el colectivo y los autos de otros también usan esa calle. Le estarías imponiendo a un vecino un costo decidido por usuarios que no firmaron contrato con él. Si además creés que nada de lo que hagan otros debe afectarte, esta solución rompe tu propio límite."
                  }
                ]
              },
              {
                label: "Pongo peaje en mi cuadra",
                value: "block_toll",
                checks: [
                  {
                    id: "street_toll",
                    anyBeliefs: ["selfish_indifference"],
                    title: "Libertad de circular, pero con molinete",
                    detail: "Privatizar cada tramo vuelve la movilidad una suma de permisos. Tu libertad de circular dependería de cuánto puedas pagar por atravesar barrios ajenos."
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        label: "No, que cada uno esquive como pueda",
        value: "street_no",
        checks: [
          {
            id: "street_no_emergency",
            kind: "reconsider",
            anyBeliefs: ["meritocracy", "poor_choice"],
            title: "Esto se alinea con tus creencias",
            detail: "Esto se alinea con una mirada dura de mérito individual. Te invitamos a reconsiderar: cuando el pozo retrasa una ambulancia o rompe una silla de ruedas, el resultado ya no depende del mérito sino de infraestructura compartida."
          }
        ]
      }
    ]
  },
  {
    id: "malvinas",
    title: "Malvinas y propiedad",
    prompt: "¿Las Malvinas te generan orgullo nacional o pensás que ya no son argentinas?",
    context: "La soberanía es una idea colectiva. Si todo es contrato privado, la pregunta incómoda es quién puede vender, defender o representar un territorio.",
    answers: [
      {
        label: "Sí, son argentinas",
        value: "malvinas_yes",
        checks: [
          {
            id: "malvinas_no_state",
            anyBeliefs: ["no_state", "private_contracts", "capital_without_flag"],
            title: "Soberanía sin sujeto",
            detail: "Si no hay Estado ni patrimonio común, no queda claro quién sostiene que algo es de todos. Una isla podría tratarse como activo privado transferible al mejor postor.",
            replies: [
              {
                label: "Las defendería una empresa privada",
                value: "private_defense",
                checks: [
                  {
                    id: "malvinas_private_defense",
                    anyBeliefs: ["private_security", "taxes_theft"],
                    title: "Defensa por suscripción",
                    detail: "Una defensa privada exige financiamiento estable. Si pagar compulsivamente es robo, la defensa nacional queda limitada a quienes acepten suscribirse."
                  }
                ]
              },
              {
                label: "Se compran y listo",
                value: "buy_islands",
                checks: [
                  {
                    id: "malvinas_buy",
                    anyBeliefs: ["private_contracts", "capital_without_flag"],
                    title: "Patria como transacción",
                    detail: "Si comprar resuelve la soberanía, vender también. Tu orgullo nacional quedaría subordinado a la oferta más alta."
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        label: "Pienso que ya no son argentinas",
        value: "malvinas_no",
        checks: [
          {
            id: "malvinas_indifference",
            kind: "reconsider",
            anyBeliefs: ["capital_without_flag"],
            title: "Consistente con mercado sin bandera",
            detail: "Esta respuesta es más coherente con la idea de capital sin bandera, aunque suele chocar con discursos patrióticos usados para pedir sacrificios colectivos."
          }
        ]
      }
    ]
  },
  {
    id: "flag_monument",
    title: "Monumento a la bandera",
    prompt: "¿El Monumento a la Bandera en Rosario debería estar pensado principalmente para la bandera argentina?",
    context: "Los símbolos patrios son bienes simbólicos comunes. Su protección suele requerir normas que no son contratos privados.",
    answers: [
      {
        label: "Sí, es un símbolo nacional",
        value: "flag_own",
        checks: [
          {
            id: "flag_symbol_state",
            anyBeliefs: ["no_state", "private_contracts", "capital_without_flag"],
            title: "Símbolo común sin comunidad política",
            detail: "Defender un símbolo nacional implica aceptar una regla colectiva sobre un espacio común. Eso contradice la idea de que todo debería decidirse solo por pactos privados. Y ni hablar de Milei agitando una bandera de otro país en esta localización, como se ve en la fuente del 14 de noviembre de 2023.",
            sources: [
              { label: "AJN: bandera en el Monumento, 14/11/2023", url: "https://x.com/AgenciaAJN/status/1724570875976896514?utm_source=chatgpt.com" }
            ],
            replies: [
              {
                label: "Debería haber una norma de uso",
                value: "flag_rule",
                checks: [
                  {
                    id: "flag_rule_state",
                    anyBeliefs: ["no_state", "no_price_controls", "private_contracts"],
                    title: "La norma volvió por la ventana",
                    detail: "Una norma común, con sanción y autoridad, es exactamente el tipo de intervención que decías querer sacar."
                  }
                ]
              },
              {
                label: "Que lo decida el dueño del lugar",
                value: "flag_owner",
                checks: [
                  {
                    id: "flag_owner_sale",
                    anyAnswers: ["flag_own"],
                    title: "Patrimonio vendible",
                    detail: "Si el monumento se privatiza, el dueño podría alquilarlo para cualquier bandera o campaña. El símbolo deja de ser nacional y pasa a ser inventario."
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        label: "No, cualquier bandera vale igual",
        value: "flag_any",
        checks: [
          {
            id: "flag_any_cross",
            anyAnswers: ["malvinas_yes"],
            title: "Patriotismo selectivo",
            detail: "Antes defendiste soberanía nacional, pero ahora los símbolos nacionales te dan igual. La bandera aparece o desaparece según convenga al argumento."
          }
        ]
      }
    ]
  },
  {
    id: "university",
    title: "Profesionales formados",
    prompt: "¿Querés que quien diseña puentes, opera a tu familia o enseña a tus hijos tenga formación seria?",
    context: "La educación parece gasto hasta que necesitás que el conocimiento exista antes de tu urgencia.",
    answers: [
      {
        label: "Sí, obvio",
        value: "trained_professionals",
        checks: [
          {
            id: "university_public",
            anyBeliefs: ["public_university_cost", "education_market", "taxes_theft"],
            title: "Querés el resultado, rechazás la inversión",
            detail: "Profesionales bien formados requieren años de docentes, hospitales escuela, bibliotecas e investigación. Si todo eso es solo un gasto ajeno, el sistema que produce esos profesionales se achica.",
            replies: [
              {
                label: "Que estudie quien pueda pagar",
                value: "only_pay_students",
                checks: [
                  {
                    id: "university_pay_wall",
                    anyBeliefs: ["meritocracy", "poor_choice"],
                    title: "Talento descartado por billetera",
                    detail: "La meritocracia queda torcida si el primer filtro no es capacidad sino herencia, crédito familiar o deuda."
                  }
                ]
              },
              {
                label: "Becas privadas",
                value: "private_scholarships",
                checks: [
                  {
                    id: "university_scholarship",
                    anyBeliefs: ["market_self", "no_subsidies"],
                    title: "Subsidio selectivo con otro logo",
                    detail: "Una beca también financia a alguien que no puede pagar. Si la ayuda es aceptable cuando decide una marca, el problema no era la ayuda sino quién la administra."
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        label: "No, alcanza con experiencia",
        value: "no_formal_training",
        checks: [
          {
            id: "university_no_training",
            anyAnswers: ["street_holes.learn_paving"],
            title: "Experiencia justo cuando no te toca",
            detail: "Antes pediste resolver calles. Improvisar con experiencia suena menos simpático cuando tu auto, tu cuerpo o un puente quedan en riesgo."
          }
        ]
      }
    ]
  },
  {
    id: "fire_flood",
    title: "Bomberos e inundaciones",
    prompt: "Si se prende fuego tu casa o se inunda tu barrio, ¿debería venir alguien aunque no hayas pagado una cuota privada?",
    context: "Los desastres no respetan contratos individuales. Se mueven por barrios enteros.",
    answers: [
      {
        label: "Sí, tiene que venir ayuda",
        value: "emergency_help_yes",
        checks: [
          {
            id: "fire_public_help",
            anyBeliefs: ["no_state", "taxes_theft", "no_subsidies", "private_security"],
            title: "Emergencia colectiva",
            detail: "Bomberos, defensa civil y evacuaciones requieren coordinación previa, equipamiento común y fondos estables. Eso es difícil de sostener si toda contribución común es robo.",
            replies: [
              {
                label: "Tendría seguro privado",
                value: "private_insurance",
                checks: [
                  {
                    id: "fire_insurance_neighbor",
                    anyBeliefs: ["private_contracts", "market_self", "no_state", "no_price_controls", "no_external_effects"],
                    title: "El fuego no chequea pólizas",
                    detail: "Una póliza privada no tiene obligación natural de cubrirlo todo, ni siquiera parcialmente, si nadie regula condiciones mínimas. Y la competencia que imaginás para mejorar el servicio puede concentrarse, cartelizar precios o diseñar letra chica a favor del rubro antes que del cliente. Sin Estado que limite monopolios o abusos, tu protección pasa a ser cuestión de suerte. Capaz justo agarrás una promo."
                  }
                ]
              },
              {
                label: "Voluntarios del barrio",
                value: "volunteers",
                checks: [
                  {
                    id: "fire_volunteers",
                    anyBeliefs: ["no_inherited_costs", "market_self"],
                    title: "Trabajo gratuito obligatorio por presión social",
                    detail: "Si el barrio depende de voluntarios, alguien termina sosteniendo gratis un servicio que todos usan. Eso también es costo decidido por otros."
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        label: "No, solo si pagué",
        value: "emergency_help_no",
        checks: [
          {
            id: "fire_no_help",
            anyBeliefs: ["private_security", "private_contracts", "no_state", "taxes_theft", "no_subsidies"],
            title: "A asistirse solo",
            detail: "Como defensor del contrato entre privados, sabrás entender que si tu barrio no genera una ganancia mínima esperada nadie tiene obligación de ofrecer ayuda en tu zona. Si ningún privado debe ser obligado por el Estado, entonces toca respetarlo: a asistirse solo."
          }
        ]
      }
    ]
  },
  {
    id: "food_medicine",
    title: "Comida y remedios",
    prompt: "¿Debería alguien controlar que un remedio no sea trucho o que un alimento no venga contaminado?",
    context: "El mercado puede castigar después. La intoxicación pasa antes.",
    answers: [
      {
        label: "Sí, debería controlarse",
        value: "inspect_food_yes",
        checks: [
          {
            id: "inspection_regulation",
            anyBeliefs: ["market_self", "no_price_controls", "private_contracts", "no_state", "no_external_effects"],
            title: "Regulación preventiva",
            detail: "Controlar calidad antes del daño exige reglas, inspectores, sanciones y autoridad. Eso contradice la idea de que el mercado se corrige solo sin intervención. Si no querés que lo que hagan los demás te afecte, necesitás algún límite antes de que el daño llegue a tu mesa.",
            replies: [
              {
                label: "Me guío por reseñas",
                value: "reviews_only",
                checks: [
                  {
                    id: "inspection_reviews",
                    anyBeliefs: ["market_self"],
                    title: "La reseña llega después del daño",
                    detail: "Para que exista una mala reseña alguien tuvo que intoxicarse primero. La prevención deja de ser prevención."
                  }
                ]
              },
              {
                label: "Demando a la empresa",
                value: "sue_company",
                checks: [
                  {
                    id: "inspection_private_justice",
                    anyBeliefs: ["private_justice", "poor_choice"],
                    title: "Justicia como producto premium",
                    detail: "Demandar cuesta tiempo, dinero y abogados. Si la justicia depende de capacidad de pago, la empresa más fuerte compra la espera."
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        label: "No, que el consumidor elija",
        value: "inspect_food_no",
        checks: [
          {
            id: "inspection_no",
            anyBeliefs: ["selfish_indifference"],
            title: "Mientras no te toque a vos",
            detail: "Si no te importa que otros compren remedios truchos o comida contaminada mientras no te jodan a vos, el criterio se rompe el día que el daño llega a tu mesa, a tu familia o a alguien que no tuvo forma de saber antes de enfermarse."
          }
        ]
      }
    ]
  },
  {
    id: "water_forest",
    title: "Agua, bosques y recursos",
    prompt: "Si una empresa contamina el río del que toma agua tu ciudad, ¿debería frenarla una autoridad pública?",
    context: "El agua y los bosques muestran el límite entre propiedad privada y daño colectivo.",
    answers: [
      {
        label: "Sí, tienen que frenarla",
        value: "environment_stop_yes",
        checks: [
          {
            id: "environment_authority",
            anyBeliefs: ["no_environment", "foreign_resources", "market_self", "private_contracts"],
            title: "La regulación ambiental reaparece",
            detail: "Frenar contaminación requiere límites previos, monitoreo y sanciones. Si toda regulación ambiental es una traba, el río queda esperando que contaminar deje de ser negocio.",
            replies: [
              {
                label: "Los vecinos la demandan",
                value: "neighbors_sue",
                checks: [
                  {
                    id: "environment_neighbors_sue",
                    anyBeliefs: ["private_justice", "poor_choice"],
                    title: "Un barrio contra un estudio jurídico",
                    detail: "La demanda privada supone que vecinos con agua contaminada tienen tiempo y recursos para enfrentar a una empresa grande. No todos llegan a la línea de largada."
                  }
                ]
              },
              {
                label: "Compro agua embotellada",
                value: "buy_bottled_water",
                checks: [
                  {
                    id: "environment_buy_water",
                    anyBeliefs: ["poor_choice", "no_subsidies"],
                    title: "Respirar y tomar agua como lujo",
                    detail: "Convertir el agua segura en compra individual castiga primero a quien menos tiene. La contaminación deja de ser problema del contaminador y pasa al bolsillo de la víctima."
                  }
                ]
              },
              makeCaptchaReply("environment"),
              makeCorruptionReply("environment")
            ]
          }
        ]
      },
      {
        label: "No, si es rentable que siga. Yo me compro mi propia agua de otro lado",
        value: "environment_no",
        checks: [
          {
            id: "environment_private_water_externality",
            anyBeliefs: ["no_external_effects"],
            title: "El daño ajeno igual te alcanza",
            detail: "No podés decidir sobre algo que afecta a los demás y al mismo tiempo sostener que nada de lo que hagan los demás tiene que afectarte. Si la empresa contamina el río, tu compra individual de agua no deshace el daño colectivo ni el derecho de otros a no tomar agua contaminada."
          }
        ]
      }
    ]
  },
  {
    id: "work_laws",
    title: "Trabajo y contrato",
    prompt: "Si tu jefe te paga con vales, te cambia el horario sin avisar y te exige 16 horas, ¿debería haber una ley que lo frene?",
    context: "La libertad de contratar suena pareja hasta que una parte necesita comer mañana.",
    answers: [
      {
        label: "Sí, eso es abuso",
        value: "labor_protect_yes",
        checks: [
          {
            id: "labor_law_returns",
            anyBeliefs: ["no_labor_laws", "private_contracts", "market_self"],
            title: "Ley laboral necesaria",
            detail: "Si querés frenar abuso patronal, necesitás reglas externas al contrato. Justo las reglas que marcaste como trabas a la libertad de contratar.",
            replies: [
              {
                label: "Renuncio y busco otro",
                value: "quit_job",
                checks: [
                  {
                    id: "labor_quit",
                    anyBeliefs: ["poor_choice", "meritocracy"],
                    title: "Libertad bajo hambre",
                    detail: "Renunciar no pesa igual para quien tiene ahorros que para quien paga alquiler esta semana. La libertad formal no borra la necesidad material."
                  }
                ]
              },
              {
                label: "Me organizo con compañeros",
                value: "organize_workers",
                checks: [
                  {
                    id: "labor_union",
                    anyBeliefs: ["anti_unions"],
                    title: "El sindicato te empezó a gustar",
                    detail: "Cuando la negociación individual no alcanza, aparece la acción colectiva. Eso es exactamente lo que rechazaste como extorsión sindical."
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        label: "No, firmaste y listo",
        value: "labor_protect_no",
        checks: [
          {
            id: "labor_no_contract",
            anyAnswers: ["emergency_help_yes"],
            title: "La urgencia también firma mal",
            detail: "Antes pediste ayuda cuando no podías negociar. En el trabajo, la necesidad también puede forzar acuerdos que no son realmente libres."
          }
        ]
      }
    ]
  },
  {
    id: "utilities",
    title: "Agua, luz y tarifas",
    prompt: "Si una sola empresa controla el agua de tu zona y triplica la tarifa, ¿debería existir un límite?",
    context: "La competencia perfecta se complica cuando no podés instalar cinco redes de agua por la misma vereda.",
    answers: [
      {
        label: "Sí, debería haber un límite",
        value: "utility_cap_yes",
        checks: [
          {
            id: "utility_price_control",
            anyBeliefs: ["no_price_controls", "market_self", "privatize_all"],
            title: "Control de precios en monopolio",
            detail: "Cuando hay monopolio natural, cambiar de proveedor no es una opción real. Pedir límite tarifario contradice rechazar toda regulación de precios.",
            replies: [
              {
                label: "Que aparezca competencia",
                value: "utility_competition",
                checks: [
                  {
                    id: "utility_competition",
                    anyBeliefs: ["market_self"],
                    title: "Competencia inviable",
                    detail: "No siempre es razonable duplicar caños, postes o vías para simular competencia. Hay mercados donde la infraestructura misma concentra poder."
                  }
                ]
              },
              {
                label: "Subsidio solo para vulnerables",
                value: "targeted_subsidy",
                checks: [
                  {
                    id: "utility_subsidy",
                    anyBeliefs: ["no_subsidies", "anti_welfare"],
                    title: "El subsidio volvió con apellido",
                    detail: "Un subsidio focalizado sigue siendo subsidio. Si te parece correcto para agua o luz, la discusión ya no es si debe existir sino cómo se administra."
                  }
                ]
              },
              makeCorruptionReply("utilities")
            ]
          }
        ]
      },
      {
        label: "No, que pague quien pueda",
        value: "utility_cap_no",
        checks: [
          {
            id: "utility_no_cap",
            anyBeliefs: ["selfish_indifference", "no_external_effects"],
            title: "Agua limpia pero inaccesible",
            detail: "Si una empresa única triplica la tarifa, no es solo 'que pague quien pueda': es una decisión ajena condicionando tu vida diaria. Si además marcaste que no te importa lo que le pase a otros mientras no te jodan, esta respuesta muestra el límite: el monopolio te puede joder a vos también."
          }
        ]
      }
    ]
  },
  {
    id: "foreigners",
    title: "Extranjeros y servicios públicos",
    prompt: "Si una persona extranjera vive, trabaja y paga impuestos acá, ¿debería poder atenderse o estudiar en instituciones públicas?",
    context: "La frontera entre aporte, derecho y xenofobia suele revelar dobles estándares.",
    answers: [
      {
        label: "Sí, si vive acá debería poder",
        value: "foreigners_yes",
        checks: [
          {
            id: "foreigners_public_services",
            anyBeliefs: ["private_health", "public_university_cost", "taxes_theft", "no_subsidies"],
            title: "Servicio público aceptado",
            detail: "Aceptar salud o educación pública para residentes implica aceptar financiamiento común. Eso choca con haber marcado esos servicios como gasto ilegítimo."
          }
        ]
      },
      {
        label: "No, que paguen todo privado",
        value: "foreigners_no",
        checks: [
          {
            id: "foreigners_contract",
            anyBeliefs: ["capital_without_flag", "private_contracts", "foreign_resources"],
            title: "Fronteras para personas, libertad para capitales",
            detail: "Si el capital extranjero puede comprar recursos libremente, pero una persona que trabaja acá no puede usar servicios comunes, la libertad de mercado queda más amable con empresas que con humanos. Además, el extranjero que vive en el país ya paga impuestos al consumir, como el IVA; y si trabaja formalmente, también aporta como vos.",
            replies: [
              {
                label: "El país primero",
                value: "country_first",
                checks: [
                  {
                    id: "foreigners_country_first",
                    anyBeliefs: ["capital_without_flag", "no_state"],
                    title: "Nacionalismo de emergencia",
                    detail: "Invocar 'el país primero' necesita una comunidad política y reglas estatales. No combina bien con Estado mínimo al extremo o capital sin bandera."
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "crime",
    title: "Robo, policía y justicia",
    prompt: "Si te roban el auto, ¿querés policía, fiscalía y juez para recuperarlo o condenar al responsable?",
    context: "La propiedad privada necesita algo más que entusiasmo por la propiedad privada.",
    answers: [
      {
        label: "Sí, quiero que actúen",
        value: "public_justice_yes",
        checks: [
          {
            id: "crime_public_force",
            anyBeliefs: ["no_state", "taxes_theft", "private_security", "private_justice"],
            title: "Estado mínimo hasta que te roban",
            detail: "La defensa efectiva de la propiedad requiere investigación, fuerza pública y jueces con autoridad sobre gente que no firmó contrato con vos.",
            replies: [
              {
                label: "Contrato seguridad privada",
                value: "hire_security",
                checks: [
                  {
                    id: "crime_security_private",
                    anyBeliefs: ["poor_choice", "private_security"],
                    title: "Propiedad protegida por nivel de ingreso",
                    detail: "Si la seguridad depende de pagar, la propiedad de quien menos tiene queda menos protegida. Las oportunidades dejan de ser iguales para todos."
                  }
                ]
              },
              {
                label: "Voy a arbitraje privado",
                value: "private_arbitration",
                checks: [
                  {
                    id: "crime_arbitration",
                    anyBeliefs: ["private_justice", "private_contracts"],
                    title: "El ladrón no firmó tu convenio arbitral",
                    detail: "El arbitraje funciona si las partes aceptan. Un ladrón no se presenta voluntariamente a tu tribunal privado."
                  }
                ]
              },
              makeCaptchaReply("crime")
            ]
          }
        ]
      },
      {
        label: "No, me arreglo solo",
        value: "public_justice_no",
        checks: [
          {
            id: "crime_self_help",
            anyBeliefs: ["private_security", "no_external_effects", "selfish_indifference"],
            title: "Privatizar la fuerza escala rápido",
            detail: "Cuando cada cual ejecuta su propia justicia, gana quien tiene más armas, contactos o dinero. La propiedad se vuelve fuerza, no derecho. Si nada de lo que hagan los demás debería afectarte, aceptar justicias privadas armadas es abrir la puerta a que la fuerza ajena decida sobre tu vida.",
            sources: [
              {
                label: "Vigilante, Holster Your Gun",
                url: "https://www.washingtonpost.com/archive/opinions/1985/01/06/vigilante-holster-your-gun/3e53d7d8-5d09-4a92-9aaf-e78e2bb03117/?utm_source=chatgpt.com"
              },
              {
                label: "THEMIS: justicia privada",
                url: "https://revistas.pucp.edu.pe/index.php/themis/article/download/10774/11268/?utm_source=chatgpt.com",
                type: "pdf"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "old_age",
    title: "Vejez y discapacidad",
    prompt: "Si una persona queda discapacitada o llega a vieja sin ahorros, ¿debería existir una red mínima para que no quede en la calle?",
    context: "No toda fragilidad es una mala decisión. A veces es accidente, edad o salud.",
    answers: [
      {
        label: "Sí, una red mínima",
        value: "safety_net_yes",
        checks: [
          {
            id: "safety_net_subsidy",
            anyBeliefs: ["anti_welfare", "no_subsidies", "poor_choice", "taxes_theft"],
            title: "Plan social cuando cambia el protagonista",
            detail: "Una red mínima es transferencia de recursos. Si la rechazás como plan cuando la necesita otro, pero la aceptás ante vejez o discapacidad, el problema era el prejuicio, no el mecanismo.",
            replies: [
              {
                label: "Solo para casos comprobados",
                value: "verified_cases",
                checks: [
                  {
                    id: "safety_net_bureaucracy",
                    anyBeliefs: ["public_workers", "state_bad_manager", "no_subsidies", "poor_choice", "taxes_theft"],
                    title: "Burocracia necesaria",
                    detail: "Comprobar casos exige trabajadores, criterios, expedientes y controles. El sistema que querías achicar vuelve para separar necesidad real de fraude."
                  }
                ]
              },
              makeCorruptionReply("safety_net")
            ]
          }
        ]
      },
      {
        label: "No, cada uno debería preverlo",
        value: "safety_net_no",
        checks: [
          {
            id: "safety_net_no",
            anyAnswers: ["emergency_help_yes"],
            title: "Solidaridad de corto plazo",
            detail: "Pediste ayuda en emergencias inmediatas, pero negás la emergencia lenta de la vejez, discapacidad o enfermedad crónica."
          }
        ],
        note: {
          title: "Sin inconsistencia inmediata",
          body: "No todo el mundo es vago o poco inteligente. A veces aparecen enfermedades en la familia, despidos, accidentes o problemas reales que dejan a una persona fuera del sistema en edad adulta. La empatía es un don: no te prives de él.",
          switchText: "¿Te interesa cambiar a",
          switchLabel: "Sí, una red mínima",
          switchOptionValue: "safety_net_yes"
        }
      }
    ]
  },
  {
    id: "gestation",
    title: "Vida en gestación",
    prompt: "¿La vida de un niño en gestación hay que cuidarla?",
    context: "Esta pregunta cruza el discurso pro-vida con el rechazo a que el Estado financie, coordine o exija controles prenatales.",
    answers: [
      {
        label: "Sí, hay que cuidarla",
        value: "gestation_yes",
        checks: [
          {
            id: "gestation_public_care",
            anyBeliefs: ["no_state", "private_health", "taxes_theft", "no_subsidies"],
            title: "Pro-vida sin sistema de cuidado",
            detail: "Cuidar una vida en gestación no es solo una frase: implica controles, derivaciones, diagnóstico prenatal, hospitales, profesionales y cobertura cuando la familia no puede pagar. Si eso te parece gasto estatal indebido, el cuidado queda condicionado por billetera.",
            sources: [
              { label: "Video público", url: "https://www.youtube.com/watch?v=E06ZfXMwDYw" },
              { label: "Ley y votación PNCC", url: "https://votaciones.hcdn.gob.ar/votacion/4696" },
              { label: "Contexto cardiopatías", url: "https://www.lanacion.com.ar/sociedad/cardiopatias-congenitas-en-bebes-de-que-trata-la-ley-y-cual-fue-la-explicacion-de-javier-milei-para-nid15082023/" }
            ],
            replies: [
              {
                label: "El Estado no puede hacerse cargo ni entrometerse",
                value: "state_out_gestation",
                checks: [],
                note: {
                  title: "Sin inconsistencia inmediata",
                  body: "A considerar: incluso con trabajo bien pago y autosustentable, puede pasar que la vida de un hijo en camino corra peligro por falta de un estudio o tratamiento que no alcanzás a pagar en privado. Por remoto que parezca, en millones de personas de un país esto ocurre todo el tiempo, y son personas reales las que sufren."
                }
              },
              {
                label: "Pero por culpa del aborto ahora hay baja natalidad",
                value: "abortion_birthrate",
                checks: [
                  {
                    id: "gestation_birthrate_data",
                    anyBeliefs: ["abortion_birthrate_belief"],
                    title: "Causalidad acomodada",
                    detail: "La caída de nacimientos en Argentina viene desde 2014, varios años antes de la Ley IVE de 2020. Las explicaciones disponibles hablan de un fenómeno multicausal: economía, trabajo, vivienda, cuidados, educación, anticoncepción y proyectos de vida. Usar solo el aborto como causa tapa el resto del sistema material que decías que el Estado no debía mirar.",
                    sources: [
                      { label: "Chequeado", url: "https://chequeado.com/el-explicador/por-que-no-se-puede-vincular-la-caida-de-la-natalidad-con-el-aborto-como-afirmo-milei-en-carajo/" },
                      { label: "EFE natalidad", url: "https://efe.com/mundo/2026-08-25/crisis-natalidad-argentina/" }
                    ]
                  }
                ]
              },
              makeCorruptionReply("gestation")
            ]
          }
        ]
      },
      {
        label: "No, el Estado no debería meterse",
        value: "gestation_state_no",
        checks: [],
        note: {
          title: "Sin inconsistencia inmediata",
          body: "A considerar: incluso con trabajo bien pago y autosustentable, puede pasar que la vida de un hijo en camino corra peligro por falta de un estudio o tratamiento que no alcanzás a pagar en privado. Por remoto que parezca, en millones de personas de un país esto ocurre todo el tiempo, y son personas reales las que sufren."
        }
      },
      {
        label: "No me va ni me viene este tema puntual",
        value: "gestation_indifferent",
        checks: [
          {
            id: "gestation_indifference",
            anyBeliefs: ["private_health", "no_state", "meritocracy"],
            title: "Neutralidad cuando incomoda",
            detail: "Si al inicio marcaste una regla fuerte sobre salud privada, Estado mínimo o mérito, declararte indiferente justo cuando aparecen bebés, salud y gasto público funciona como salida de emergencia, no como consistencia."
          }
        ]
      }
    ]
  }
];

questions.push(
  {
    id: "same_old_power",
    title: "Los mismos de siempre",
    prompt: "¿Te parece que, como dijo Milei, los mismos chorros de siempre no deberían ser parte del poder?",
    context: "El discurso anticasta se vuelve medible cuando se compara con nombres concretos del gabinete, la mesa política y el armado parlamentario.",
    answers: [
      {
        label: "Sí, no deberían estar",
        value: "same_old_out_yes",
        checks: [
          {
            id: "same_old_inside_power",
            anyBeliefs: ["presidential_cabinet", "milei_voter"],
            title: "Anticasta con nombres de siempre",
            detail: "Si estás de acuerdo con que los mismos de siempre no deberían ser parte del poder, choca con avalar un equipo donde aparecen figuras de larga trayectoria previa como Patricia Bullrich, Luis Caputo, Diego Santilli, Federico Sturzenegger, Martín Menem, Eduardo Menem, Lule Menem, Santiago Caputo y Karina Milei. No hace falta probar que cada uno sea 'chorro': alcanza con que sean nombres de la política que el discurso decía venir a correr.",
            sources: [
              { label: "Reunión de Gabinete 2026", url: "https://www.argentina.gob.ar/node/497027" },
              { label: "Gabinete inicial LA NACION", url: "https://www.lanacion.com.ar/politica/asi-quedo-el-gabinete-del-presidente-javier-milei-uno-por-uno-todos-los-ministros-y-secretarios-nid10122023/" },
              { label: "Mismos de siempre EL PAIS", url: "https://elpais.com/argentina/2023-11-01/la-acrobacia-discursiva-de-milei-del-macri-repugnante-y-fascista-de-ayer-a-coincidir-hoy-en-un-90.html" }
            ],
            replies: [
              {
                label: "Pero ahora están de nuestro lado",
                value: "same_old_our_side",
                checks: [
                  {
                    id: "same_old_side_change",
                    anyBeliefs: ["presidential_cabinet", "milei_voter"],
                    title: "La casta cambia de nombre cuando firma",
                    detail: "Si el criterio era que los nombres de siempre no debían manejar el poder, que ahora estén de tu lado no resuelve la contradicción: solo cambia el color del cartel. Sin ir muy lejos, Patricia Bullrich pasó por la Juventud Peronista, el peronismo menemista, La Alianza, Unión por Todos, Coalición Cívica/ARI, PRO, Cambiemos/Juntos por el Cambio y finalmente La Libertad Avanza.",
                    sources: [
                      { label: "Chequeado: Patricia Bullrich", url: "https://chequeado.com/personajes/quien-es-patricia-bullrich/" },
                      { label: "Mesa política Infobae", url: "https://www.infobae.com/politica/2026/07/02/nueva-era-para-milei-nace-un-gobierno-abrazado-al-sistema-con-karina-como-el-jefe-de-casi-todo/" },
                      { label: "Reunión oficial", url: "https://www.argentina.gob.ar/node/497027" }
                    ]
                  }
                ]
              },
              {
                label: "No me va ni me viene este tema puntual",
                value: "same_old_indifferent",
                checks: [
                  {
                    id: "same_old_indifference",
                    anyBeliefs: ["presidential_cabinet", "milei_voter", "state_bad_manager"],
                    title: "Anticasta hasta que gobierna",
                    detail: "Si el rechazo a la casta era una base moral del voto, declararte indiferente cuando aparecen los nombres concretos del poder funciona como blindaje emocional, no como consistencia.",
                    sources: [
                      { label: "Spot campaña TN", url: "https://tn.com.ar/politica/2023/07/08/javier-milei-estreno-su-primer-spot-de-campana-sin-mencionar-a-la-casta-ni-a-la-dolarizacion/" }
                    ]
                  }
                ]
              },
              makeCorruptionReply("same_old"),
              makeCaptchaReply("same_old")
            ]
          }
        ]
      },
      {
        label: "No, si sirven pueden estar",
        value: "same_old_can_stay",
        checks: [
          {
            id: "same_old_pragmatism",
            anyBeliefs: ["state_bad_manager", "public_workers", "milei_voter"],
            title: "Pragmatismo contra relato",
            detail: "Aceptar que figuras tradicionales pueden quedarse si sirven contradice la idea gruesa de que el problema era la casta en sí. Entonces el conflicto ya no era 'los mismos de siempre', sino quién los contrata.",
            sources: [
              { label: "Reunión de Gabinete", url: "https://www.argentina.gob.ar/node/497027" },
              { label: "Gabinete LA NACION", url: "https://www.lanacion.com.ar/politica/asi-quedo-el-gabinete-del-presidente-javier-milei-uno-por-uno-todos-los-ministros-y-secretarios-nid10122023/" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "future_debt",
    title: "Deuda y futuras generaciones",
    prompt: "Si endeudar futuras generaciones es cobrarles impuestos a personas que no votaron, ¿debería estar mal aunque lo haga un gobierno que apoyás?",
    context: "La deuda cruza el archivo fiscal de campaña con la defensa del préstamo cuando gobierna el equipo propio.",
    answers: [
      {
        label: "Sí, debería estar mal siempre",
        value: "debt_future_no",
        checks: [
          {
            id: "debt_archive_vs_government",
            anyBeliefs: ["future_debt_theft", "milei_voter", "presidential_cabinet"],
            title: "La excepción era para los tuyos",
            detail: "Si endeudar futuras generaciones está mal siempre, choca con haber marcado que está bien cuando el gobierno libertario pide deuda porque los K se robaron todo. Ahí el principio no era contra la deuda: era permiso para el equipo propio.",
            sources: [
              { label: "Milei: deuda inmoral", url: "https://www.youtube.com/watch?v=SHsHX8gph-M" },
              { label: "Casa Rosada: deuda como impuestos futuros", url: "https://www.casarosada.gob.ar/informacion/discursos/51058-palabras-del-presidente-de-la-nacion-javier-milei-ante-el-consejo-interamericano-de-comercio-y-produccion-cicyp-2025" },
              { label: "Argentina: acuerdo FMI USD 20.000 millones", url: "https://www.argentina.gob.ar/node/462281" },
              { label: "Chequeado: deuda en la gestión Milei", url: "https://chequeado.com/el-explicador/cae-la-deuda-total-en-la-gestion-de-javier-milei-pero-aumenta-el-endeudamiento-en-dolares/" },
              { label: "TN: programa financiero 2026-2027", url: "https://tn.com.ar/politica/2026/07/11/la-hoja-de-ruta-de-javier-milei-para-2027-torniquete-al-dolar-y-alianza-con-gobernadores/" }
            ],
            replies: [
              {
                label: "Pero es deuda para pagar deuda vieja",
                value: "debt_to_pay_debt",
                checks: [
                  {
                    id: "debt_rollover_excuse",
                    anyBeliefs: ["future_debt_theft", "taxes_theft"],
                    title: "La cuenta sigue viajando al futuro",
                    detail: "El argumento de 'pedir para pagar deuda vieja' queda raro cuando el antecedente histórico es que en 2005/2006 se canceló anticipadamente la deuda con el FMI por alrededor de 9.810 millones de dólares. Hasta Milei lo reconoció en archivo. Recomendación: leé las fuentes antes de convertir cada préstamo nuevo en herencia inevitable.",
                    sources: [
                      { label: "Argentina: acuerdo FMI USD 20.000 millones", url: "https://www.argentina.gob.ar/node/462281" },
                      { label: "Casa Rosada: plan de desendeudamiento FMI 2005", url: "https://www.casarosada.gob.ar/informacion/archivo/24862-blank-411" },
                      { label: "Cuenta de Inversión 2005", url: "https://www.economia.gob.ar/hacienda/cgn/cuenta/2005/sdp/anexoj.htm" },
                      { label: "Milei reconoce pago de Néstor", url: "https://www.youtube.com/shorts/vrqh_Y6sCf4" },
                      { label: "Milei: deuda inmoral", url: "https://www.youtube.com/watch?v=SHsHX8gph-M" }
                    ]
                  }
                ]
              },
              makeCorruptionReply("future_debt"),
              makeCaptchaReply("future_debt")
            ]
          }
        ]
      },
      {
        label: "No, si es Milei es para ordenar el desastre que dejaron",
        value: "debt_if_ours_yes",
        checks: [
          {
            id: "debt_team_permission",
            anyBeliefs: ["future_debt_theft", "taxes_theft", "milei_voter", "presidential_cabinet"],
            title: "Impuestos futuros, pero con pulsera libertaria",
            detail: "Marcaste que está bien pedir deuda si la pide el gobierno libertario por culpa de los K. Pero Milei mismo definió la deuda como impuestos futuros: si los impuestos son robo, estás defendiendo robo futuro cuando lo firma tu presidente. Además, el gobierno anunció oficialmente un acuerdo con el FMI por USD 20.000 millones.",
            sources: [
              { label: "Milei: deuda inmoral", url: "https://www.youtube.com/watch?v=SHsHX8gph-M" },
              { label: "Casa Rosada: deuda como impuestos futuros", url: "https://www.casarosada.gob.ar/informacion/discursos/51058-palabras-del-presidente-de-la-nacion-javier-milei-ante-el-consejo-interamericano-de-comercio-y-produccion-cicyp-2025" },
              { label: "Argentina: acuerdo FMI USD 20.000 millones", url: "https://www.argentina.gob.ar/node/462281" },
              { label: "Chequeado: deuda en la gestión Milei", url: "https://chequeado.com/el-explicador/cae-la-deuda-total-en-la-gestion-de-javier-milei-pero-aumenta-el-endeudamiento-en-dolares/" }
            ],
            replies: [
              makeCorruptionReply("future_debt_team")
            ]
          }
        ]
      },
      {
        label: "No me importa mientras baje la inflación",
        value: "debt_inflation_first",
        checks: [
          {
            id: "debt_inflation_tradeoff",
            anyBeliefs: ["future_debt_theft", "taxes_theft"],
            title: "Impuestos futuros por tranquilidad presente",
            detail: "Estás aceptando cambiar alivio presente por deuda futura. El truco es viejo: cuando lo hace otro gobierno es populismo; cuando lo hace el tuyo, le decís plan económico.",
            sources: [
              { label: "INDEC IPC", url: "https://www.indec.gob.ar/Nivel4/Tema/3/5/31" },
              { label: "Argentina: acuerdo FMI USD 20.000 millones", url: "https://www.argentina.gob.ar/node/462281" },
              { label: "Chequeado: deuda en la gestión Milei", url: "https://chequeado.com/el-explicador/cae-la-deuda-total-en-la-gestion-de-javier-milei-pero-aumenta-el-endeudamiento-en-dolares/" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "climate",
    title: "Clima y catástrofes",
    prompt: "Si una sequía, inundación o ola de calor arruina cosechas y barrios, ¿debería haber políticas públicas para prevenir y adaptarse?",
    context: "El cambio climático es una prueba de consistencia entre negar la evidencia, pedir ayuda cuando pega el daño y rechazar regulación ambiental.",
    answers: [
      {
        label: "Sí, hay que prevenir",
        value: "climate_policy_yes",
        checks: [
          {
            id: "climate_policy_denial",
            anyBeliefs: ["climate_socialist_lie", "no_environment", "market_self", "no_state"],
            title: "La mentira socialista te inundó el living",
            detail: "Si marcaste que el calentamiento global es una mentira socialista o que la regulación ambiental sobra, pedir prevención pública cuando llegan sequías, olas de calor o inundaciones contradice esa negación inicial. La NASA en español, ente de bandera de Estados Unidos tan amado por Milei, explica que el calentamiento actual tiene evidencia medible y que la actividad humana es una causa central.",
            sources: [
              { label: "NASA Ciencia: evidencia", url: "https://ciencia.nasa.gov/cambio-climatico/evidencia/" },
              { label: "NASA Ciencia: causas", url: "https://ciencia.nasa.gov/cambio-climatico/causas/" },
              { label: "Chequeado Milei clima", url: "https://chequeado.com/el-explicador/que-dijo-javier-milei-sobre-el-cambio-climatico/" }
            ],
            replies: [
              {
                label: "Es un ciclo natural, no humano",
                value: "natural_cycle",
                checks: [
                  {
                    id: "climate_natural_cycle",
                    anyBeliefs: ["climate_socialist_lie"],
                    title: "Ciclo natural como comodín",
                    detail: "Que existan ciclos naturales no alcanza para explicar el calentamiento actual. La explicación no es 'pasa siempre': los datos muestran una aceleración ligada a actividades humanas.",
                    sources: [
                      { label: "NASA Ciencia: evidencia", url: "https://ciencia.nasa.gov/cambio-climatico/evidencia/" },
                      { label: "NASA Ciencia: causas", url: "https://ciencia.nasa.gov/cambio-climatico/causas/" }
                    ]
                  }
                ]
              },
              makeCorruptionReply("climate"),
              makeCaptchaReply("climate")
            ]
          }
        ]
      },
      {
        label: "No, el mercado se adapta solo",
        value: "climate_market_only",
        checks: [
          {
            id: "climate_market_only_cross",
            anyAnswers: ["environment_stop_yes", "emergency_help_yes", "utility_cap_yes"],
            title: "Adaptación privada, rescate público",
            detail: "En otros hilos pediste frenar contaminación, recibir ayuda de emergencia o limitar servicios esenciales. Cuando el daño climático llega, el mercado solo suele socializar pérdidas que antes prometía resolver sin Estado.",
            sources: [
              { label: "NASA Ciencia: efectos", url: "https://ciencia.nasa.gov/cambio-climatico/los-efectos-del-cambio-climatico/" }
            ]
          }
        ]
      },
      {
        label: "No me va ni me viene este tema puntual",
        value: "climate_indifferent",
        checks: [
          {
            id: "climate_indifference",
            anyBeliefs: ["no_environment", "foreign_resources", "market_self"],
            title: "Indiferencia con consecuencias",
            detail: "Si al inicio defendiste recursos, mercado o rechazo a regulaciones, correrte justo cuando aparecen agua, cosechas y barrios inundados no borra que tus marcas tienen efectos materiales.",
            sources: [
              { label: "NASA Ciencia: efectos", url: "https://ciencia.nasa.gov/cambio-climatico/los-efectos-del-cambio-climatico/" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "organs",
    title: "Órganos como mercado",
    prompt: "Si una persona pobre vende un riñón por necesidad, ¿eso te parece una transacción libre y aceptable?",
    context: "La venta de órganos expone el límite entre libertad contractual y coerción económica.",
    answers: [
      {
        label: "Sí, es su cuerpo y su decisión",
        value: "organ_market_yes",
        checks: [
          {
            id: "organ_market_coercion",
            anyBeliefs: ["abortion_birthrate_belief"],
            title: "Tu cuerpo decide solo cuando conviene al mercado",
            detail: "Si defendés que una persona pobre venda un riñón porque es su cuerpo y su decisión, pero marcaste que el aborto legal se paga con caída de natalidad, la autonomía corporal aparece para vender partes del cuerpo y desaparece cuando una mujer decide sobre un embarazo. El criterio no es 'su cuerpo': es mercado sí, derechos no.",
            sources: [
              { label: "Milei y natalidad", url: "https://www.youtube.com/watch?v=woL9GrXmvHs" },
              { label: "OPS/OMS trasplantes", url: "https://www.paho.org/es/temas/donacion-trasplantes" },
              { label: "INCUCAI rechazo", url: "https://www.infobae.com/salud/2023/05/04/el-director-del-incucai-cruzo-a-milei-la-venta-de-organos-es-una-postura-disparatada-no-es-viable-y-va-en-contra-del-consenso-global/" },
              { label: "Archivo Milei órganos", url: "https://www.pagina12.com.ar/426307-javier-milei-a-favor-de-la-venta-de-organos-es-un-mercado-ma" }
            ],
            replies: [
              {
                label: "Pero así habría más órganos disponibles",
                value: "more_organs",
                checks: [
                  {
                    id: "organ_supply_trust",
                    anyBeliefs: ["market_self", "private_health"],
                    title: "Más oferta, menos confianza",
                    detail: "Los sistemas de trasplante dependen de confianza pública, trazabilidad, equidad y criterios médicos. Si el acceso se ordena por precio, el cuerpo pobre se vuelve inventario del cuerpo rico.",
                    sources: [
                      { label: "OPS/OMS trasplantes", url: "https://www.paho.org/es/temas/donacion-trasplantes" },
                      { label: "LA NACION INCUCAI", url: "https://www.lanacion.com.ar/sociedad/venta-de-organos-que-dijo-el-incucai-sobre-las-afirmaciones-de-javier-milei-durante-el-debate-nid09102023/" }
                    ]
                  }
                ]
              },
              makeCorruptionReply("organs")
            ]
          }
        ]
      },
      {
        label: "No, eso debería estar prohibido",
        value: "organ_market_no",
        checks: [
          {
            id: "organ_market_regulation",
            anyBeliefs: ["private_contracts", "no_state", "market_self"],
            title: "El Estado regula tu cuerpo para protegerte",
            detail: "Si pedís prohibir la compraventa de órganos, aceptás que hay contratos tan abusivos que requieren límite público. Eso choca con la idea de que todo pacto privado es suficiente.",
            sources: [
              { label: "OPS/OMS trasplantes", url: "https://www.paho.org/es/temas/donacion-trasplantes" },
              { label: "OMS principios rectores", url: "https://apps.who.int/gb/ebwha/pdf_files/WHA63/A63_R22-sp.pdf", type: "pdf" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "disappeared",
    title: "Desaparecidos y Estado",
    prompt: "Si un Estado secuestra, tortura y desaparece personas fuera de la ley, ¿qué te parece más importante?",
    context: "El hilo cruza discusión numérica, violencia estatal y derechos humanos.",
    answers: [
      {
        label: "Condenar el crimen estatal, sin importar la cifra",
        value: "state_crime_first",
        checks: [
          {
            id: "disappeared_any_number",
            anyBeliefs: ["disappeared_number_indignation"],
            title: "La cifra no cambia el crimen estatal",
            detail: "Si lo central es condenar que el Estado secuestre, torture y desaparezca personas fuera de la ley, entonces tu indignación inicial no debería quedar apoyada en discutir si el número fue inflado. 8 mil, 30 mil, 100 mil o 500 mil siguen siendo crímenes inadmisibles.",
            sources: [
              { label: "Short debate", url: "https://www.youtube.com/shorts/FuQZxp6wTVQ" },
              { label: "Derechos Humanos", url: "https://www.argentina.gob.ar/noticias/la-secretaria-de-derechos-humanos-manifiesta-su-preocupacion-por-declaraciones" },
              { label: "LA NACION debate", url: "https://www.lanacion.com.ar/politica/elecciones-2023-javier-milei-reavivo-el-debate-sobre-la-violencia-de-los-70-y-recibio-fuertes-nid02102023/" }
            ],
            replies: [
              {
                label: "Pero fue una guerra con excesos",
                value: "war_excesses",
                checks: [
                  {
                    id: "disappeared_war_excesses",
                    anyBeliefs: ["disappeared_number_indignation", "no_state"],
                    title: "Exceso no es desaparición sistemática",
                    detail: "Llamarlo 'excesos' suaviza que el propio Estado, que tiene monopolio de la fuerza, ejecutó secuestros, torturas, apropiaciones y desapariciones fuera de la ley. Si temés al poder estatal, este debería ser el ejemplo máximo.",
                    sources: [
                      { label: "Secretaría DDHH", url: "https://www.argentina.gob.ar/noticias/la-secretaria-de-derechos-humanos-manifiesta-su-preocupacion-por-declaraciones" },
                      { label: "TN debate", url: "https://tn.com.ar/politica/2023/10/01/la-polemica-definicion-de-javier-milei-sobre-el-numero-de-desaparecidos-durante-la-dictadura-no-son-30000/" }
                    ]
                  }
                ]
              },
              {
                label: "No me va ni me viene este tema puntual",
                value: "disappeared_indifferent",
                checks: [
                  {
                    id: "disappeared_indifference",
                    anyBeliefs: ["disappeared_number_indignation", "no_state"],
                    title: "Indignación selectiva",
                    detail: "Si te indigna que se mienta con la cantidad de personas desaparecidas, declararte indiferente cuando el tema pasa del número al crimen estatal deja la indignación reducida a una disputa conveniente.",
                    sources: [
                      { label: "Secretaría DDHH", url: "https://www.argentina.gob.ar/noticias/la-secretaria-de-derechos-humanos-manifiesta-su-preocupacion-por-declaraciones" }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: "disappeared_milei_cross",
            anyBeliefs: ["milei_voter"],
            title: "Tu respuesta choca con tu candidato",
            detail: "Tu respuesta prioriza condenar desapariciones estatales por encima de la cifra exacta. Si además marcaste que votaste o votarías a Milei, aparece un choque con su forma de encuadrar públicamente la dictadura como 'guerra' con 'excesos'.",
            sources: [
              { label: "Short debate", url: "https://www.youtube.com/shorts/FuQZxp6wTVQ" },
              { label: "LA NACION", url: "https://www.lanacion.com.ar/politica/elecciones-2023-javier-milei-reavivo-el-debate-sobre-la-violencia-de-los-70-y-recibio-fuertes-nid02102023/" }
            ]
          }
        ]
      },
      {
        label: "Discutir primero si fueron 30.000 o menos",
        value: "number_first",
        checks: [
          {
            id: "disappeared_number_first",
            anyBeliefs: ["selfish_indifference"],
            title: "La cifra importa distinto si eras vos",
            detail: "Poner primero la discusión numérica desplaza el hecho más grave: un Estado usando poder público para secuestrar, torturar y desaparecer personas. Si hubiesen sido solo 10 personas y una de ellas eras vos, tu regla de 'mientras no me jodan a mí' ya no te serviría para mirar para otro lado.",
            sources: [
              { label: "Short debate", url: "https://www.youtube.com/shorts/FuQZxp6wTVQ" },
              { label: "TN debate", url: "https://tn.com.ar/politica/2023/10/01/la-polemica-definicion-de-javier-milei-sobre-el-numero-de-desaparecidos-durante-la-dictadura-no-son-30000/" },
              { label: "Secretaría DDHH", url: "https://www.argentina.gob.ar/noticias/la-secretaria-de-derechos-humanos-manifiesta-su-preocupacion-por-declaraciones" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "english_chant",
    title: "Cancha, Malvinas y Thatcher",
    prompt: "¿Cantaste alguna vez en partidos 'el que no salta es un inglés'?",
    context: "El nacionalismo futbolero suele cruzarse raro con admiraciones políticas internacionales.",
    answers: [
      {
        label: "Sí, alguna vez",
        value: "chant_yes",
        checks: [
          {
            id: "chant_thatcher",
            anyBeliefs: ["milei_voter", "capital_without_flag"],
            title: "Anti-inglés en la tribuna, Thatcher en el debate",
            detail: "Si te sale el canto anti-inglés por Malvinas, pero votás o votarías a quien defendió a Margaret Thatcher como una gran líder, aparece un choque simbólico fuerte. Malvinas no queda como principio sino como emoción de ocasión.",
            sources: [
              { label: "Short Thatcher 1", url: "https://www.youtube.com/shorts/v83aFvKp070" },
              { label: "Short Thatcher 2", url: "https://www.youtube.com/shorts/kHa0UYFFjwc" },
              { label: "LA NACION Thatcher", url: "https://www.lanacion.com.ar/politica/debate-2023-que-dijo-javier-milei-sobre-margaret-thatcher-y-las-islas-malvinas-nid13112023/" }
            ],
            replies: [
              {
                label: "Una cosa es fútbol y otra política",
                value: "football_not_politics",
                checks: [],
                note: {
                  title: "Sin inconsistencia inmediata",
                  body: "Estamos de acuerdo: si tu cántico internamente se encuadra solo en el ámbito deportivo, no genera inconsistencias por sí mismo."
                }
              },
              makeCorruptionReply("thatcher")
            ]
          }
        ]
      },
      {
        label: "No, nunca",
        value: "chant_no",
        checks: [
          {
            id: "chant_no_malvinas_cross",
            kind: "reconsider",
            anyAnswers: ["malvinas_yes"],
            title: "Consistente, pero revisá el cruce político",
            detail: "Esta respuesta puede ser consistente, pero si antes activaste orgullo fuerte por Malvinas, el mapa te va a seguir cruzando con cómo se defienden esos símbolos en la práctica política.",
            sources: [
              { label: "LA NACION Thatcher", url: "https://www.lanacion.com.ar/politica/debate-2023-que-dijo-javier-milei-sobre-margaret-thatcher-y-las-islas-malvinas-nid13112023/" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "china",
    title: "China y comunismo",
    prompt: "Si una empresa argentina puede ganar plata comerciando con China, ¿debería hacerlo aunque China sea gobernada por el Partido Comunista?",
    context: "El archivo anti-comunista y el pragmatismo comercial chocan cuando aparece un mercado grande.",
    answers: [
      {
        label: "Sí, que los privados comercien con quien quieran",
        value: "china_trade_yes",
        checks: [
          {
            id: "china_private_trade_cross",
            anyBeliefs: ["anti_communism"],
            title: "Moral anti-comunista, caja pro-comercio",
            detail: "Si marcaste que no habría que negociar con comunistas, pero aceptás comercio privado con China, la moral deja de ser límite cuando aparece negocio. Es el choque entre archivo de campaña y pragmatismo de gobierno.",
            sources: [
              { label: "Video archivo China", url: "https://www.youtube.com/watch?v=t3wv5DyTsv0" },
              { label: "BBC entrevista", url: "https://www.eleconomista.net/amp/actualidad/Los-motes-que-me-ponen-los-fracasados-que-hundieron-el-pais-me-tienen-sin-cuidado-Javier-Milei-en-entrevista-con-la-BBC-20240506-0002.html" },
              { label: "Bloomberg Línea", url: "https://www.bloomberglinea.com/latinoamerica/argentina/no-se-frenara-el-comercio-del-sector-privado-con-brasil-y-china-dice-javier-milei/?outputType=amp" }
            ],
            replies: [
              {
                label: "El Estado no negocia, solo los privados",
                value: "state_not_private",
                checks: [
                  {
                    id: "china_state_private_blur",
                    anyBeliefs: ["private_contracts", "capital_without_flag"],
                    title: "Frontera cómoda entre Estado y privados",
                    detail: "Aunque digas que comercian privados, ese comercio usa reglas públicas: aduana, permisos, moneda, tratados, bancos y embajadas. El Estado no desaparece cuando el negocio conviene. A menos que seas narco. Ahí te viene de lujo.",
                    sources: [
                      { label: "Bloomberg Línea", url: "https://www.bloomberglinea.com/latinoamerica/argentina/no-se-frenara-el-comercio-del-sector-privado-con-brasil-y-china-dice-javier-milei/?outputType=amp" },
                      { label: "Forbes Argentina", url: "https://www.forbesargentina.com/negocios/los-negocios-mira-china-argentina-como-esta-relacion-milei-n74755" }
                    ]
                  }
                ]
              },
              makeCorruptionReply("china")
            ]
          }
        ]
      },
      {
        label: "No, con comunistas no se negocia",
        value: "china_trade_no",
        checks: [
          {
            id: "china_trade_no_market",
            anyBeliefs: ["market_self", "capital_without_flag", "private_contracts"],
            title: "Mercado libre con lista negra ideológica",
            detail: "Si el mercado debe ser libre y el capital no tiene bandera, prohibir comercio por ideología estatal contradice tu propia defensa de transacciones privadas.",
            sources: [
              { label: "Video archivo China", url: "https://www.youtube.com/watch?v=t3wv5DyTsv0" },
              { label: "Semana archivo", url: "https://www.semana.com/mundo/articulo/yo-no-haria-negocios-con-china-no-negocio-con-comunistas-la-promesa-de-javier-milei-si-llega-a-ser-presidente-de-argentina/202342/" }
            ]
          }
        ]
      }
    ]
  }
);

const globalChecks = [
  {
    id: "global_state_symbol_property",
    anyAnswers: ["malvinas_yes", "flag_own"],
    allBeliefs: ["no_state"],
    title: "Estado fantasma",
    detail: "Querés soberanía y símbolos patrios, pero partiste de que el Estado no debería existir."
  },
  {
    id: "global_market_until_monopoly",
    anyAnswers: ["utility_cap_yes", "inspect_food_yes", "environment_stop_yes"],
    anyBeliefs: ["market_self", "no_price_controls"],
    title: "Mercado libre hasta que toca perder",
    detail: "Cuando el mercado produce monopolio, daño o riesgo sanitario, tus respuestas piden límites externos al mercado."
  }
];

const scoreMessages = [
  "Sin creencias activas: el paquete ideológico quedó desmontado.",
  "Quedan pocas creencias en pie.",
  "El medidor bajó: algunas certezas ya fueron abandonadas.",
  "Todavía queda bastante dogma activo.",
  "Nivel alto: el paquete inicial sigue casi intacto.",
  "100% libertario: todas las creencias iniciales siguen marcadas."
];

const captchaTiles = [
  { id: "t1", label: "Semáforo", target: true, tone: "red" },
  { id: "t2", label: "Vidriera", target: false, tone: "window" },
  { id: "t3", label: "Semáforo", target: true, tone: "green" },
  { id: "t4", label: "Poste", target: false, tone: "post" },
  { id: "t5", label: "Semáforo", target: true, tone: "yellow" },
  { id: "t6", label: "Cartel", target: false, tone: "sign" },
  { id: "t7", label: "Vereda", target: false, tone: "sidewalk" },
  { id: "t8", label: "Semáforo", target: true, tone: "red" },
  { id: "t9", label: "Auto", target: false, tone: "car" }
];

let state = createFreshState();

function createFreshState() {
  return {
    stage: "survey",
    selectedBeliefs: [],
    initialBeliefs: [],
    usedQuestions: [],
    currentQuestionId: null,
    nodes: [],
    answers: [],
    inconsistencies: [],
    triggeredChecks: [],
    pendingCaptcha: null
  };
}

const dom = {
  surveyScreen: document.querySelector("#survey-screen"),
  appScreen: document.querySelector("#app-screen"),
  beliefList: document.querySelector("#belief-list"),
  beliefCount: document.querySelector("#belief-count"),
  toggleAllBeliefs: document.querySelector("#toggle-all-beliefs"),
  startButton: document.querySelector("#start-button"),
  loadButton: document.querySelector("#load-button"),
  nextQuestion: document.querySelector("#next-question"),
  resetButton: document.querySelector("#reset-button"),
  conceptMap: document.querySelector("#concept-map"),
  currentTitle: document.querySelector("#current-title"),
  currentSubtitle: document.querySelector("#current-subtitle"),
  questionStatus: document.querySelector("#question-status"),
  scorePercent: document.querySelector("#score-percent"),
  scoreBar: document.querySelector("#score-bar"),
  scoreMessage: document.querySelector("#score-message"),
  reasoningCount: document.querySelector("#reasoning-count"),
  deconversionBanner: document.querySelector("#deconversion-banner"),
  inconsistencyCount: document.querySelector("#inconsistency-count"),
  inconsistencyList: document.querySelector("#inconsistency-list"),
  selectedBeliefCount: document.querySelector("#selected-belief-count"),
  selectedBeliefs: document.querySelector("#selected-beliefs"),
  captchaLayer: document.querySelector("#captcha-layer")
};

function init() {
  renderBeliefSurvey();
  bindEvents();
  const saved = loadState();
  dom.loadButton.disabled = !saved || saved.stage !== "play";
  renderAll();
}

function bindEvents() {
  dom.toggleAllBeliefs.addEventListener("click", toggleAllBeliefs);
  dom.startButton.addEventListener("click", startNewRun);
  dom.loadButton.addEventListener("click", continueSavedRun);
  dom.nextQuestion.addEventListener("click", pickNextQuestion);
  dom.resetButton.addEventListener("click", resetAll);
}

function renderBeliefSurvey() {
  dom.beliefList.innerHTML = beliefs
    .map((belief) => {
      return `
        <label class="belief-option">
          <input type="checkbox" value="${belief.id}">
          <span>${belief.text}</span>
        </label>
      `;
    })
    .join("");

  dom.beliefList.addEventListener("change", updateSurveyCount);
  updateSurveyCount();
}

function updateSurveyCount() {
  const selected = getCheckedBeliefs();
  dom.beliefCount.textContent = `${selected.length} marcadas`;
  dom.toggleAllBeliefs.textContent = selected.length === beliefs.length ? "Desmarcar todas" : "Marcar todas";
  if (state.stage === "survey") {
    state.selectedBeliefs = selected;
    renderMeter();
    renderSelectedBeliefs();
  }
}

function getCheckedBeliefs() {
  return Array.from(dom.beliefList.querySelectorAll("input:checked")).map((item) => item.value);
}

function toggleAllBeliefs() {
  const inputs = Array.from(dom.beliefList.querySelectorAll("input"));
  const shouldCheck = inputs.some((input) => !input.checked);
  inputs.forEach((input) => {
    input.checked = shouldCheck;
  });
  updateSurveyCount();
}

function startNewRun() {
  const selected = getCheckedBeliefs();
  if (!selected.length) {
    dom.beliefList.classList.add("shake");
    window.setTimeout(() => dom.beliefList.classList.remove("shake"), 450);
    return;
  }

  state = createFreshState();
  state.stage = "play";
  state.selectedBeliefs = selected;
  state.initialBeliefs = selected;
  showApp();
  pickNextQuestion();
}

function continueSavedRun() {
  const saved = loadState();
  if (!saved) return;
  state = saved;
  showApp();
  renderAll();
}

function resetAll() {
  localStorage.removeItem(STORAGE_KEY);
  state = createFreshState();
  dom.surveyScreen.classList.remove("hidden");
  dom.appScreen.classList.add("hidden");
  dom.beliefList.querySelectorAll("input").forEach((input) => {
    input.checked = false;
  });
  updateSurveyCount();
  dom.loadButton.disabled = true;
  renderAll();
}

function showApp() {
  dom.surveyScreen.classList.add("hidden");
  dom.appScreen.classList.remove("hidden");
}

function pickNextQuestion() {
  let remaining = questions.filter((question) => !state.usedQuestions.includes(question.id));
  if (!remaining.length) {
    finishRun();
    return;
  }

  const question = remaining[Math.floor(Math.random() * remaining.length)];
  state.currentQuestionId = question.id;
  state.usedQuestions.push(question.id);
  state.pendingCaptcha = null;
  state.nodes = [
    {
      id: makeId("q"),
      type: "question",
      questionId: question.id,
      title: question.prompt,
      body: "",
      depth: 0,
      options: question.answers
    }
  ];
  saveState();
  renderAll();
}

function finishRun() {
  const initialBeliefs = state.initialBeliefs && state.initialBeliefs.length
    ? state.initialBeliefs
    : state.selectedBeliefs;
  const initialSet = new Set(initialBeliefs);
  const selectedSet = new Set(state.selectedBeliefs);
  const changed = initialBeliefs.length !== state.selectedBeliefs.length
    || initialBeliefs.some((id) => !selectedSet.has(id))
    || state.selectedBeliefs.some((id) => !initialSet.has(id));
  const removedCount = Math.max(0, initialBeliefs.length - state.selectedBeliefs.length);
  const reduction = initialBeliefs.length ? Math.round((removedCount / initialBeliefs.length) * 100) : 0;
  const libertarianPercent = Math.round((state.selectedBeliefs.length / beliefs.length) * 100);

  state.currentQuestionId = null;
  state.pendingCaptcha = null;
  state.nodes = [
    {
      id: makeId("f"),
      type: "finish",
      title: changed ? "Recorrido terminado" : "Blindaje completado",
      body: changed
        ? `Felicitaciones: llegaste al final con ${libertarianPercent}% de libertarismo activo y redujiste ${reduction}% de las creencias que habías marcado al inicio.`
        : "Lamentamos que su seguridad y ego se basen enteramente en sus creencias actuales. No fue nuestra intención intentar desestabilizarle. Mejor suerte la próxima.",
      depth: 0,
      options: []
    }
  ];
  saveState();
  renderAll();
}

function selectOption(nodeId, optionIndex) {
  const node = state.nodes.find((item) => item.id === nodeId);
  if (!node || !node.options) return;
  if (node.selectedIndex === optionIndex) return;

  const option = node.options[optionIndex];
  pruneDescendants(nodeId);
  state.nodes = state.nodes.map((item) => (
    item.id === nodeId
      ? { ...item, selectedIndex: optionIndex, selectedValue: option.value }
      : item
  ));

  const answerKeys = [option.value];
  if (node.questionId) {
    answerKeys.push(`${node.questionId}.${option.value}`);
  } else if (state.currentQuestionId) {
    answerKeys.push(`${state.currentQuestionId}.${option.value}`);
  }
  recordAnswer(answerKeys);

  const answerNode = {
    id: makeId("a"),
    type: node.type === "question" ? "answer" : "reply",
    title: option.label,
    body: "",
    depth: node.depth + 1,
    parentId: nodeId,
    answerKeys
  };
  state.nodes.push(answerNode);

  if (option.captcha) {
    openCaptcha(option.captcha, option.value, answerNode);
    saveState();
    renderAll();
    return;
  }

  const localChecks = option.checks || [];
  const historicChecks = globalChecks.map((check) => ({ ...check, historic: true }));
  const added = runChecks([...localChecks, ...historicChecks], answerNode.id, answerNode.depth + 1);

  if (!added) {
    state.nodes.push({
      id: makeId("n"),
      type: "note",
      title: option.note?.title || "Sin inconsistencia inmediata",
      body: option.note?.body || "Esta respuesta no chocó con tus marcas iniciales ni con el historial disponible. La próxima pregunta puede cruzarla.",
      depth: answerNode.depth + 1,
      parentId: answerNode.id,
      switchNodeId: option.note?.switchOptionValue ? nodeId : null,
      switchOptionValue: option.note?.switchOptionValue || null,
      switchText: option.note?.switchText || "",
      switchLabel: option.note?.switchLabel || ""
    });
  }

  saveState();
  renderAll();
}

function pruneDescendants(parentId) {
  const descendantIds = new Set();
  let changed = true;

  while (changed) {
    changed = false;
    state.nodes.forEach((node) => {
      if (!descendantIds.has(node.id) && (node.parentId === parentId || descendantIds.has(node.parentId))) {
        descendantIds.add(node.id);
        changed = true;
      }
    });
  }

  if (!descendantIds.size) return;

  const removedNodes = state.nodes.filter((node) => descendantIds.has(node.id));
  const removedAnswerKeys = new Set(removedNodes.flatMap((node) => node.answerKeys || []));
  const removedCheckIds = new Set(removedNodes.flatMap((node) => {
    return [...(node.checkIds || []), node.checkId].filter(Boolean);
  }));

  if (state.pendingCaptcha && descendantIds.has(state.pendingCaptcha.parentId)) {
    state.pendingCaptcha = null;
  }

  state.nodes = state.nodes.filter((node) => !descendantIds.has(node.id));
  state.answers = state.answers.filter((answer) => !removedAnswerKeys.has(answer));
  state.triggeredChecks = state.triggeredChecks.filter((checkId) => !removedCheckIds.has(checkId));
  state.inconsistencies = state.inconsistencies.filter((item) => {
    const itemCheckIds = item.checkIds || [item.id];
    return !itemCheckIds.some((checkId) => removedCheckIds.has(checkId));
  });
}

function openCaptcha(captcha, answerValue, answerNode) {
  state.pendingCaptcha = {
    id: makeId("captcha"),
    checkId: captcha.id,
    title: captcha.title,
    detail: captcha.detail,
    answerValue,
    parentId: answerNode.id,
    depth: answerNode.depth + 1,
    selectedTiles: [],
    complete: false,
    error: ""
  };
}

function toggleCaptchaTile(tileId) {
  if (!state.pendingCaptcha || state.pendingCaptcha.complete) return;
  const selected = new Set(state.pendingCaptcha.selectedTiles || []);
  if (selected.has(tileId)) {
    selected.delete(tileId);
  } else {
    selected.add(tileId);
  }
  state.pendingCaptcha.selectedTiles = [...selected];
  state.pendingCaptcha.error = "";
  saveState();
  renderAll();
}

function verifyCaptcha() {
  if (!state.pendingCaptcha || state.pendingCaptcha.complete) return;
  const selected = new Set(state.pendingCaptcha.selectedTiles || []);
  const targets = captchaTiles.filter((tile) => tile.target).map((tile) => tile.id);
  const correct = targets.every((id) => selected.has(id))
    && captchaTiles.filter((tile) => !tile.target).every((tile) => !selected.has(tile.id));

  if (!correct) {
    state.pendingCaptcha.error = "Todavía quedan semáforos por señalar.";
    saveState();
    renderAll();
    return;
  }

  addCaptchaInconsistency();
  state.pendingCaptcha.complete = true;
  state.pendingCaptcha.error = "";
  saveState();
  renderAll();
}

function addCaptchaInconsistency() {
  const captcha = state.pendingCaptcha;
  if (!captcha || state.triggeredChecks.includes(captcha.checkId)) return;

  const item = {
    id: captcha.checkId,
    title: captcha.title,
    detail: captcha.detail,
    sources: null,
    criteria: { beliefs: [], answers: [captcha.answerValue] },
    condition: { allAnswers: [captcha.answerValue], anyAnswers: [], allBeliefs: [], anyBeliefs: [] }
  };

  state.inconsistencies.push(item);
  state.triggeredChecks.push(captcha.checkId);
  state.nodes.push({
    id: makeId("e"),
    type: "error",
    title: captcha.title,
    body: captcha.detail,
    depth: captcha.depth,
    parentId: captcha.parentId,
    checkId: captcha.checkId,
    sources: null,
    hideSources: true,
    criteria: item.criteria,
    condition: item.condition,
    options: []
  });
}

function continueAfterCaptcha() {
  if (!state.pendingCaptcha || !state.pendingCaptcha.complete) return;
  state.pendingCaptcha = null;
  saveState();
  renderAll();
}

function runChecks(checks, parentId, depth, global = false) {
  const matchedChecks = checks.filter((check) => {
    return !state.triggeredChecks.includes(check.id) && matchesCondition(check);
  });

  if (!matchedChecks.length) return 0;
  if (matchedChecks.every((check) => check.kind === "reconsider")) {
    addReconsiderationNode(matchedChecks, parentId, depth);
    return 1;
  }

  const primary = matchedChecks[0];
  const groupId = matchedChecks.map((check) => check.id).join("__");
  const criteria = mergeCriteria(matchedChecks.map(getMatchedCriteria));
  const conditions = matchedChecks.map(getCheckCondition);
  const sources = mergeSources(matchedChecks);
  const sections = matchedChecks.map((check) => ({
    title: check.title,
    detail: check.detail,
    historic: Boolean(check.historic)
  }));
  const replies = mergeReplies(matchedChecks);
  const detail = sections
    .map((section, index) => index === 0 ? section.detail : `${section.title}: ${section.detail}`)
    .join(" ");

  const item = {
    id: groupId,
    checkIds: matchedChecks.map((check) => check.id),
    title: primary.title,
    detail,
    sources,
    criteria,
    condition: conditions[0],
    conditions
  };

  state.inconsistencies.push(item);
  matchedChecks.forEach((check) => {
    state.triggeredChecks.push(check.id);
  });
  state.nodes.push({
    id: makeId(matchedChecks.every((check) => check.historic || global) ? "g" : "e"),
    type: matchedChecks.every((check) => check.historic || global) ? "global-error" : "error",
    title: primary.title,
    body: primary.detail,
    sections,
    depth,
    parentId,
    checkId: groupId,
    checkIds: matchedChecks.map((check) => check.id),
    sources,
    criteria,
    condition: conditions[0],
    conditions,
    options: replies
  });

  return 1;
}

function addReconsiderationNode(matchedChecks, parentId, depth) {
  const primary = matchedChecks[0];
  const groupId = matchedChecks.map((check) => check.id).join("__");
  const criteria = mergeCriteria(matchedChecks.map(getMatchedCriteria));
  const conditions = matchedChecks.map(getCheckCondition);
  const sources = mergeSources(matchedChecks);
  const sections = matchedChecks.map((check) => ({
    title: check.title,
    detail: check.detail,
    historic: Boolean(check.historic)
  }));

  matchedChecks.forEach((check) => {
    state.triggeredChecks.push(check.id);
  });
  state.nodes.push({
    id: makeId("r"),
    type: "reconsider",
    title: primary.title,
    body: primary.detail,
    sections,
    depth,
    parentId,
    checkId: groupId,
    checkIds: matchedChecks.map((check) => check.id),
    sources,
    criteria,
    condition: conditions[0],
    conditions,
    options: mergeReplies(matchedChecks)
  });
}

function mergeCriteria(criteriaGroups) {
  const merged = { beliefs: [], answers: [] };
  criteriaGroups.forEach((criteria) => {
    (criteria.beliefs || []).forEach((belief) => {
      if (!merged.beliefs.includes(belief)) merged.beliefs.push(belief);
    });
    (criteria.answers || []).forEach((answer) => {
      if (!merged.answers.includes(answer)) merged.answers.push(answer);
    });
  });
  return merged;
}

function mergeSources(checks) {
  const seen = new Set();
  const sources = [];
  checks.forEach((check) => {
    normalizeSources(check.sources).forEach((source) => {
      if (seen.has(source.url)) return;
      seen.add(source.url);
      sources.push(source);
    });
  });
  return sources;
}

function mergeReplies(checks) {
  const seen = new Set();
  const replies = [];
  checks.forEach((check) => {
    (check.replies || []).forEach((reply) => {
      if (seen.has(reply.value)) return;
      seen.add(reply.value);
      replies.push(reply);
    });
  });
  return replies;
}

function getMatchedCriteria(check) {
  const selected = new Set(state.selectedBeliefs);
  const answers = new Set(state.answers);
  return {
    beliefs: [...(check.allBeliefs || []), ...(check.anyBeliefs || [])].filter((belief) => selected.has(belief)),
    answers: [...(check.allAnswers || []), ...(check.anyAnswers || [])].filter((answer) => answers.has(answer))
  };
}

function getCheckCondition(check) {
  return {
    allBeliefs: check.allBeliefs || [],
    anyBeliefs: check.anyBeliefs || [],
    allAnswers: check.allAnswers || [],
    anyAnswers: check.anyAnswers || []
  };
}

function isInconsistencyActive(item) {
  const conditions = item.conditions || [item.condition || {}];
  return conditions.some(isConditionActive);
}

function isConditionActive(condition) {
  const selected = new Set(state.selectedBeliefs);
  const answers = new Set(state.answers);
  const allBeliefs = condition.allBeliefs || [];
  const anyBeliefs = condition.anyBeliefs || [];
  const allAnswers = condition.allAnswers || [];
  const anyAnswers = condition.anyAnswers || [];

  const allBeliefsMatch = allBeliefs.every((belief) => selected.has(belief));
  const anyBeliefMatch = !anyBeliefs.length || anyBeliefs.some((belief) => selected.has(belief));
  const allAnswersMatch = allAnswers.every((answer) => answers.has(answer));
  const anyAnswerMatch = !anyAnswers.length || anyAnswers.some((answer) => answers.has(answer));

  return allBeliefsMatch && anyBeliefMatch && allAnswersMatch && anyAnswerMatch;
}

function matchesCondition(check) {
  const selected = new Set(state.selectedBeliefs);
  const answers = new Set(state.answers);

  const allBeliefs = check.allBeliefs || [];
  const anyBeliefs = check.anyBeliefs || [];
  const allAnswers = check.allAnswers || [];
  const anyAnswers = check.anyAnswers || [];

  const allBeliefsMatch = allBeliefs.every((belief) => selected.has(belief));
  const anyBeliefMatch = !anyBeliefs.length || anyBeliefs.some((belief) => selected.has(belief));
  const allAnswersMatch = allAnswers.every((answer) => answers.has(answer));
  const anyAnswerMatch = !anyAnswers.length || anyAnswers.some((answer) => answers.has(answer));

  return allBeliefsMatch && anyBeliefMatch && allAnswersMatch && anyAnswerMatch;
}

function getCriteriaLabels(criteria) {
  return getCriteriaItems(criteria).map((item) => item.label);
}

function getCriteriaItems(criteria) {
  const beliefItems = (criteria.beliefs || [])
    .map((id) => {
      const belief = beliefs.find((item) => item.id === id);
      return belief ? { type: "belief", id, label: belief.text } : null;
    })
    .filter(Boolean);
  const answerItems = (criteria.answers || [])
    .map((id) => {
      const label = getAnswerLabel(id);
      return label ? { type: "answer", id, label } : null;
    })
    .filter(Boolean);

  const seen = new Set();
  return [...beliefItems, ...answerItems].filter((item) => {
    const key = `${item.type}:${item.id}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function getAnswerLabel(value) {
  const rawValue = value.includes(".") ? value.split(".").pop() : value;
  const option = findOptionByValue(rawValue, questions);
  return option ? `Respuesta previa: ${option.label}` : null;
}

function findOptionByValue(value, items) {
  for (const item of items) {
    if (item.value === value) return item;
    for (const check of item.checks || []) {
      const found = findOptionByValue(value, check.replies || []);
      if (found) return found;
    }

    const options = item.answers || item.replies || item.options || [];
    for (const option of options) {
      if (option.value === value) return option;
      for (const check of option.checks || []) {
        const found = findOptionByValue(value, check.replies || []);
        if (found) return found;
      }
    }
  }
  return null;
}

function recordAnswer(keys) {
  keys.forEach((key) => {
    if (!state.answers.includes(key)) {
      state.answers.push(key);
    }
  });
}

function renderAll() {
  const current = questions.find((question) => question.id === state.currentQuestionId);
  dom.currentTitle.textContent = current ? current.title : "Mapa conceptual";
  dom.currentSubtitle.textContent = "";
  dom.questionStatus.textContent = `${state.usedQuestions.length} de ${questions.length} vistas`;
  renderMap();
  renderMeter();
  renderSelectedBeliefs();
  renderCaptcha();
}

function renderMap() {
  dom.conceptMap.innerHTML = "";

  state.nodes.forEach((node) => {
    const isResolved = (node.type === "error" || node.type === "global-error") && !isInconsistencyActive(node);
    const row = document.createElement("article");
    row.className = `node node-${node.type}${typeof node.selectedIndex === "number" ? " answered" : ""}${isResolved ? " resolved" : ""}`;
    row.style.setProperty("--depth", node.depth);

    const eyebrow = isResolved
      ? "Ahora es una respuesta cohesiva con tu propio pensamiento"
      : getNodeEyebrow(node.type);
    const body = renderNodeBody(node);
    const criteria = renderCriteria(node);
    const sources = renderSources(node);
    const options = node.options && node.options.length
      ? `<div class="node-actions">${node.options.map((option, index) => {
          const selected = node.selectedIndex === index;
          return `<button type="button" class="${selected ? "selected" : ""}" aria-pressed="${selected}" data-node="${node.id}" data-index="${index}">${option.label}</button>`;
        }).join("")}</div>`
      : "";

    row.innerHTML = `
      <div class="node-rail" aria-hidden="true"></div>
      <div class="node-card">
        <span class="node-eyebrow">${eyebrow}</span>
        <h3>${node.title}</h3>
        ${body}
        ${criteria}
        ${sources}
        ${options}
      </div>
    `;

    dom.conceptMap.appendChild(row);
  });

  if (state.currentQuestionId && !state.pendingCaptcha && !hasOpenThreadOptions()) {
    dom.conceptMap.insertAdjacentHTML(
      "beforeend",
      `
        <article class="thread-end">
          <div>
            <span>Fin de este hilo</span>
            <strong>Podés seguir con otra pregunta.</strong>
          </div>
          <button id="inline-next-question" class="secondary-button" type="button">
            Siguiente pregunta
          </button>
        </article>
      `
    );
  }

  dom.conceptMap.querySelectorAll("button[data-node]").forEach((button) => {
    button.addEventListener("click", () => {
      selectOption(button.dataset.node, Number(button.dataset.index));
    });
  });

  dom.conceptMap.querySelectorAll("button[data-drop-belief]").forEach((button) => {
    button.addEventListener("click", () => {
      dropBelief(button.dataset.dropBelief);
    });
  });

  dom.conceptMap.querySelectorAll("button[data-restore-belief]").forEach((button) => {
    button.addEventListener("click", () => {
      restoreBelief(button.dataset.restoreBelief);
    });
  });

  dom.conceptMap.querySelectorAll("button[data-switch-node]").forEach((button) => {
    button.addEventListener("click", () => {
      switchAnswer(button.dataset.switchNode, button.dataset.switchValue);
    });
  });

  const inlineNextQuestion = dom.conceptMap.querySelector("#inline-next-question");
  if (inlineNextQuestion) {
    inlineNextQuestion.addEventListener("click", pickNextQuestion);
  }
}

function renderNodeBody(node) {
  if (node.type === "note" && node.switchNodeId && node.switchOptionValue) {
    return `
      ${node.body ? `<p>${node.body}</p>` : ""}
      <div class="node-actions note-switch">
        <span>${node.switchText}</span>
        <button type="button" data-switch-node="${node.switchNodeId}" data-switch-value="${node.switchOptionValue}">${node.switchLabel}</button>
      </div>
    `;
  }

  if ((node.type === "error" || node.type === "global-error") && Array.isArray(node.sections) && node.sections.length > 1) {
    return `
      <div class="inconsistency-sections">
        ${node.sections.map((section, index) => `
          <section class="${section.historic ? "historic" : ""}">
            ${index === 0 ? "" : `<h4>${section.title}</h4>`}
            <p>${section.detail}</p>
          </section>
        `).join("")}
      </div>
    `;
  }

  return node.body ? `<p>${node.body}</p>` : "";
}

function switchAnswer(nodeId, optionValue) {
  const node = state.nodes.find((item) => item.id === nodeId);
  if (!node || !Array.isArray(node.options)) return;
  const optionIndex = node.options.findIndex((option) => option.value === optionValue);
  if (optionIndex < 0) return;
  selectOption(nodeId, optionIndex);
}

function hasOpenThreadOptions() {
  return state.nodes.some((node) => Array.isArray(node.options) && node.options.length && typeof node.selectedIndex !== "number");
}

function renderCaptcha() {
  if (!dom.captchaLayer) return;
  const captcha = state.pendingCaptcha;
  if (!captcha) {
    dom.captchaLayer.innerHTML = "";
    dom.captchaLayer.classList.add("hidden");
    return;
  }

  dom.captchaLayer.classList.remove("hidden");

  if (captcha.complete) {
    dom.captchaLayer.innerHTML = `
      <div class="captcha-backdrop"></div>
      <section class="captcha-dialog captcha-result" role="dialog" aria-modal="true" aria-labelledby="captcha-result-title">
        <span class="captcha-brand">Verificación completada</span>
        <h2 id="captcha-result-title">Lo sentimos, estábamos casi seguros de que se trataba de un bot</h2>
        <p>La respuesta quedó registrada como inconsistencia y este hilo termina acá.</p>
        <button id="captcha-continue" class="primary-button" type="button">Continuar</button>
      </section>
    `;
    dom.captchaLayer.querySelector("#captcha-continue").addEventListener("click", continueAfterCaptcha);
    return;
  }

  const selected = new Set(captcha.selectedTiles || []);
  dom.captchaLayer.innerHTML = `
    <div class="captcha-backdrop"></div>
    <section class="captcha-dialog" role="dialog" aria-modal="true" aria-labelledby="captcha-title">
      <div class="captcha-top">
        <span class="captcha-brand">liberCAPTCHA</span>
        <h2 id="captcha-title">Seleccioná todos los cuadros con semáforos</h2>
      </div>
      <div class="captcha-grid">
        ${captchaTiles.map((tile) => `
          <button
            class="captcha-tile ${tile.target ? "traffic" : ""} ${selected.has(tile.id) ? "selected" : ""}"
            data-captcha-tile="${tile.id}"
            type="button"
            aria-pressed="${selected.has(tile.id)}"
          >
            <span class="tile-scene tile-${tile.tone}"></span>
            <small>${tile.label}</small>
          </button>
        `).join("")}
      </div>
      <p class="captcha-error">${captcha.error || ""}</p>
      <div class="captcha-actions">
        <span>${selected.size} seleccionados</span>
        <button id="captcha-verify" class="primary-button" type="button">Verificar</button>
      </div>
    </section>
  `;

  dom.captchaLayer.querySelectorAll("[data-captcha-tile]").forEach((button) => {
    button.addEventListener("click", () => toggleCaptchaTile(button.dataset.captchaTile));
  });
  dom.captchaLayer.querySelector("#captcha-verify").addEventListener("click", verifyCaptcha);
}

function dropBelief(beliefId) {
  if (!state.selectedBeliefs.includes(beliefId)) return;
  state.selectedBeliefs = state.selectedBeliefs.filter((id) => id !== beliefId);
  saveState();
  renderAll();
}

function restoreBelief(beliefId) {
  if (state.selectedBeliefs.includes(beliefId)) return;
  if (!beliefs.some((belief) => belief.id === beliefId)) return;
  state.selectedBeliefs = beliefs
    .map((belief) => belief.id)
    .filter((id) => id === beliefId || state.selectedBeliefs.includes(id));
  saveState();
  renderAll();
}

function renderCriteria(node) {
  if (node.type !== "error" && node.type !== "global-error" && node.type !== "reconsider") return "";

  const criteria = getCriteriaItems(node.criteria || {});
  if (!criteria.length) return "";
  const isReconsider = node.type === "reconsider";

  return `
    <div class="criteria-box ${isReconsider ? "reconsider-box" : ""}">
      <span>${isReconsider ? "Reconsiderar" : "Choca con"}</span>
      <ul>
        ${criteria.map((item) => renderCriteriaItem(item)).join("")}
      </ul>
    </div>
  `;
}

function renderCriteriaItem(item) {
  if (item.type !== "belief") {
    return `<li class="criteria-row criteria-answer"><span>${item.label}</span></li>`;
  }

  const isActive = state.selectedBeliefs.includes(item.id);
  const action = isActive
    ? `<button type="button" data-drop-belief="${item.id}">Ya no creo en esto</button>`
    : `
      <div class="belief-return">
        <em>Creencia retirada</em>
        <button type="button" data-restore-belief="${item.id}">Volver a creer</button>
      </div>
    `;

  return `
    <li class="criteria-row ${isActive ? "" : "retired"}">
      <span>${item.label}</span>
      ${action}
    </li>
  `;
}

function renderSources(node) {
  if (node.type !== "error" && node.type !== "global-error" && node.type !== "reconsider") return "";
  if (node.hideSources || node.sources === null) return "";

  const sources = normalizeSources(node.sources);
  const sourceLinks = sources
    .map(renderSourceLink)
    .join("");

  return `
    <div class="source-actions">
      <span>Fuentes:</span>
      <div class="source-links">${sourceLinks}</div>
    </div>
  `;
}

function renderSourceLink(source) {
  const isPdf = source.type === "pdf" || /\.pdf($|[?#])|\/download\//i.test(source.url);
  const icon = isPdf ? `<span class="pdf-badge" aria-label="PDF descargable">PDF</span>` : "";
  return `<a href="${source.url}" target="_blank" rel="noopener noreferrer">${icon}${source.label}</a>`;
}

function normalizeSources(sources) {
  if (!Array.isArray(sources) || !sources.length) {
    return defaultSources;
  }

  const validSources = sources.filter((source) => source && source.url && source.label);
  return validSources.length ? validSources : defaultSources;
}

function getNodeEyebrow(type) {
  const labels = {
    question: "Pregunta base",
    answer: "Respuesta",
    reply: "Réplica",
    error: "Inconsistencia",
    "global-error": "Cruce histórico",
    reconsider: "Consistente",
    note: "Observación",
    finish: "Resultado"
  };
  return labels[type] || "Nodo";
}

function renderMeter() {
  const activeCount = state.inconsistencies.filter(isInconsistencyActive).length;
  const activeBeliefs = state.stage === "survey" ? getCheckedBeliefs().length : state.selectedBeliefs.length;
  const percent = Math.round((activeBeliefs / beliefs.length) * 100);
  dom.scorePercent.textContent = `${percent}%`;
  dom.scoreBar.style.height = `${percent}%`;
  dom.inconsistencyCount.textContent = `${activeCount} activas`;
  dom.deconversionBanner.classList.toggle("hidden", activeBeliefs !== 0 || state.stage !== "play");

  let message = scoreMessages[0];
  if (percent >= 100) message = scoreMessages[5];
  else if (percent >= 75) message = scoreMessages[4];
  else if (percent >= 50) message = scoreMessages[3];
  else if (percent >= 25) message = scoreMessages[2];
  else if (percent > 0) message = scoreMessages[1];
  dom.scoreMessage.textContent = message;
  dom.reasoningCount.textContent = activeCount
    ? `Tu razonamiento tiene ${activeCount} ${activeCount === 1 ? "inconsistencia activa" : "inconsistencias activas"} entre sí.`
    : "Tu razonamiento todavía no acumula inconsistencias.";

  dom.inconsistencyList.innerHTML = state.inconsistencies.length
    ? state.inconsistencies
        .slice()
        .reverse()
        .map((item) => {
          const isActive = isInconsistencyActive(item);
          const sources = item.sources === null ? "" : normalizeSources(item.sources).map(renderSourceLink).join("");
          return `
            <li class="${isActive ? "" : "resolved"}">
              <strong>${item.title}</strong>
              <span>${item.detail}</span>
              ${sources ? `<div class="list-sources"><b>Fuentes:</b>${sources}</div>` : ""}
            </li>
          `;
        })
        .join("")
    : `<li class="empty">Las contradicciones van a aparecer acá.</li>`;
}

function renderSelectedBeliefs() {
  const selected = beliefs.filter((belief) => state.selectedBeliefs.includes(belief.id));
  dom.selectedBeliefCount.textContent = selected.length;
  dom.selectedBeliefs.innerHTML = selected.length
    ? selected.map((belief) => `<span>${belief.text}</span>`).join("")
    : `<span class="empty-belief">No quedan creencias activas.</span>`;
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (error) {
    return null;
  }
}

function makeId(prefix) {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

init();
