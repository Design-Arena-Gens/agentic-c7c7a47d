import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Catalytic Selective Oxidation Process (CSOP)</h1>
          <div className={styles.heroText}>
            <p>
              The Catalytic Selective Oxidation Process (CSOP) represents an advanced methodology for the direct oxidation of organic feedstocks to produce high-purity intermediate chemicals. This continuous-flow process leverages heterogeneous catalysis and precise oxygen dosing to achieve superior conversion rates while maintaining stringent safety parameters.
            </p>
            <p>
              Designed for large-scale industrial implementation, CSOP integrates real-time process monitoring, automated control systems, and closed-loop feedback mechanisms to optimize yield, minimize by-product formation, and ensure operational continuity across varying production demands.
            </p>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>Process Overview</h2>
          <p className={styles.bodyText}>
            CSOP operates through controlled introduction of gaseous oxygen into a liquid-phase organic substrate within a fixed-bed catalytic reactor. The catalyst surface facilitates selective oxidation at moderate temperatures (80–140°C) and pressures (3–8 bar), enabling high selectivity toward the target oxidation product while suppressing undesired parallel reactions.
          </p>
          <p className={styles.bodyText}>
            The process architecture incorporates multi-stage separation, heat integration, and solvent recovery to maximize atom economy and energy efficiency. Continuous analytical monitoring ensures product specification compliance and enables dynamic adjustment of operating parameters in response to feedstock variability or catalyst aging.
          </p>
          <div className={styles.diagramPlaceholder}>
            <p className={styles.placeholderText}>[ Process Flow Diagram Placeholder ]</p>
            <p className={styles.placeholderSubtext}>
              Diagram to illustrate: Feed preparation → Reactor system → Gas-liquid separation → Product purification → Recycle streams
            </p>
          </div>
        </div>
      </section>

      {/* Process Workflow */}
      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>Process Workflow</h2>
          <div className={styles.workflowSteps}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>01</div>
              <h3 className={styles.stepTitle}>Feed Preparation & Conditioning</h3>
              <p className={styles.stepText}>
                Organic feedstock is filtered, degassed, and pre-heated to reaction temperature. Oxygen or oxygen-enriched air is compressed, metered, and blended with inert carrier gas to maintain concentrations below flammability limits. Both streams are fed to the reactor inlet manifold with precise flow control.
              </p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>02</div>
              <h3 className={styles.stepTitle}>Catalytic Oxidation Reaction</h3>
              <p className={styles.stepText}>
                The feed mixture enters a tubular fixed-bed reactor packed with proprietary catalyst pellets. Heat of reaction is removed via external cooling jackets to maintain isothermal conditions. Oxygen uptake and temperature profiles are continuously monitored across multiple reactor zones to ensure stable operation and catalyst longevity.
              </p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>03</div>
              <h3 className={styles.stepTitle}>Gas-Liquid Separation</h3>
              <p className={styles.stepText}>
                Reactor effluent is depressurized and fed to a flash separator where unreacted gases are disengaged. Off-gas streams are analyzed for oxygen content and either recycled or directed to thermal oxidation for emissions control. Liquid phase containing product and residual substrate proceeds to downstream separation.
              </p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>04</div>
              <h3 className={styles.stepTitle}>Product Purification</h3>
              <p className={styles.stepText}>
                The liquid product stream undergoes distillation to separate target oxidation product from unreacted feedstock, by-products, and solvent. Recovered feedstock is recycled to the reactor inlet. Solvent is recirculated after treatment. Final product is cooled, analyzed for quality assurance, and transferred to storage.
              </p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>05</div>
              <h3 className={styles.stepTitle}>Process Monitoring & Optimization</h3>
              <p className={styles.stepText}>
                Integrated sensors measure temperature, pressure, flow rates, composition, and catalyst bed performance in real time. Advanced control algorithms adjust oxygen dosing, feed rates, and cooling to maintain optimal conversion and selectivity. Predictive analytics enable early detection of catalyst deactivation and inform regeneration scheduling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>Key Benefits</h2>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <h3 className={styles.benefitTitle}>Process Efficiency</h3>
              <p className={styles.benefitText}>
                Achieves conversion rates exceeding 92% with product selectivity above 96%, significantly reducing raw material consumption and waste generation compared to conventional oxidation methods.
              </p>
            </div>
            <div className={styles.benefitCard}>
              <h3 className={styles.benefitTitle}>Operational Safety</h3>
              <p className={styles.benefitText}>
                Closed-loop oxygen dosing and automated safety interlocks maintain operation outside flammability envelopes. Continuous gas composition monitoring and emergency depressurization systems ensure personnel and asset protection.
              </p>
            </div>
            <div className={styles.benefitCard}>
              <h3 className={styles.benefitTitle}>Environmental Performance</h3>
              <p className={styles.benefitText}>
                Minimal greenhouse gas emissions through efficient oxygen utilization and energy integration. Reduced VOC emissions via solvent recovery and condensation systems. Lower water consumption through closed-loop cooling and process intensification.
              </p>
            </div>
            <div className={styles.benefitCard}>
              <h3 className={styles.benefitTitle}>Reliability & Uptime</h3>
              <p className={styles.benefitText}>
                Robust catalyst formulations provide stable activity over 12–18 month cycles. Redundant instrumentation and control systems ensure continuous operation. Modular design allows for planned maintenance without full plant shutdown.
              </p>
            </div>
            <div className={styles.benefitCard}>
              <h3 className={styles.benefitTitle}>Cost Effectiveness</h3>
              <p className={styles.benefitText}>
                Lower capital expenditure through compact reactor design and heat integration. Reduced operating costs via high yields, low energy consumption, and extended catalyst life. Faster return on investment compared to legacy oxidation technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications & Industries */}
      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>Applications & Industries</h2>
          <p className={styles.bodyText}>
            CSOP technology is deployed across multiple sectors requiring selective oxidation of organic compounds to produce high-value intermediates and specialty chemicals:
          </p>
          <div className={styles.applicationsList}>
            <div className={styles.applicationItem}>
              <h4 className={styles.applicationTitle}>Fine & Specialty Chemicals</h4>
              <p className={styles.applicationText}>Production of aldehydes, ketones, carboxylic acids, and epoxides for pharmaceutical intermediates and agrochemical synthesis.</p>
            </div>
            <div className={styles.applicationItem}>
              <h4 className={styles.applicationTitle}>Polymer Additives</h4>
              <p className={styles.applicationText}>Synthesis of plasticizers, stabilizers, and antioxidants used in high-performance polymer formulations.</p>
            </div>
            <div className={styles.applicationItem}>
              <h4 className={styles.applicationTitle}>Surfactants & Detergents</h4>
              <p className={styles.applicationText}>Oxidation of fatty alcohols and alkylbenzenes to produce surfactant precursors for industrial and consumer applications.</p>
            </div>
            <div className={styles.applicationItem}>
              <h4 className={styles.applicationTitle}>Solvent Manufacturing</h4>
              <p className={styles.applicationText}>Production of oxygenated solvents including esters, ethers, and glycol derivatives for coatings, adhesives, and cleaning formulations.</p>
            </div>
            <div className={styles.applicationItem}>
              <h4 className={styles.applicationTitle}>Petrochemical Refining</h4>
              <p className={styles.applicationText}>Upgrading of hydrocarbon streams through selective oxidation to increase product value and reduce environmental impact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Solution Highlights */}
      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>Technical Solution Highlights</h2>
          <div className={styles.technicalFeatures}>
            <div className={styles.featureItem}>
              <h4 className={styles.featureTitle}>Advanced Process Instrumentation</h4>
              <p className={styles.featureText}>
                Multi-point temperature profiling, inline Raman spectroscopy for real-time composition analysis, and oxygen trace analyzers ensure precise process control and rapid deviation detection.
              </p>
            </div>
            <div className={styles.featureItem}>
              <h4 className={styles.featureTitle}>Integrated Safety Systems</h4>
              <p className={styles.featureText}>
                SIL-rated emergency shutdown systems, automated oxygen limiting controls, and continuous flammability monitoring provide multiple layers of process safety protection.
              </p>
            </div>
            <div className={styles.featureItem}>
              <h4 className={styles.featureTitle}>Catalyst Management Technology</h4>
              <p className={styles.featureText}>
                Proprietary catalyst formulations with high mechanical strength and thermal stability. In-situ regeneration capabilities extend operational cycles and reduce downtime. Performance tracking algorithms predict optimal regeneration timing.
              </p>
            </div>
            <div className={styles.featureItem}>
              <h4 className={styles.featureTitle}>Digital Process Optimization</h4>
              <p className={styles.featureText}>
                Cloud-connected data analytics platform aggregates process data for performance benchmarking, predictive maintenance, and continuous improvement initiatives. Machine learning models optimize setpoints for changing feedstock characteristics.
              </p>
            </div>
            <div className={styles.featureItem}>
              <h4 className={styles.featureTitle}>Energy Integration Architecture</h4>
              <p className={styles.featureText}>
                Heat recovery from reactor exotherm used for feed preheating and distillation reboilers. Variable frequency drives on pumps and compressors reduce electrical consumption. Overall energy efficiency improved by 30–40% versus conventional oxidation processes.
              </p>
            </div>
            <div className={styles.featureItem}>
              <h4 className={styles.featureTitle}>Modular & Scalable Design</h4>
              <p className={styles.featureText}>
                Standardized process modules enable rapid scale-up from pilot to commercial production. Parallel reactor trains accommodate capacity increases without process redesign. Skid-mounted equipment packages reduce installation time and commissioning complexity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Get Expert Technical Support</h2>
          <p className={styles.ctaText}>
            Our process engineering team is available to discuss CSOP implementation, conduct feasibility studies, and provide technical consultation for your specific oxidation application.
          </p>
          <div className={styles.ctaButtons}>
            <a href="#contact" className={styles.ctaPrimary}>Contact Technical Sales</a>
            <a href="#consultation" className={styles.ctaSecondary}>Request Consultation</a>
          </div>
          <div className={styles.ctaInfo}>
            <p className={styles.ctaInfoText}>
              <strong>Technical Inquiries:</strong> process.engineering@company.com
            </p>
            <p className={styles.ctaInfoText}>
              <strong>Phone:</strong> +1 (555) 123-4567
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p className={styles.footerText}>
          © 2024 Industrial Process Solutions. All technical specifications are subject to ongoing development and optimization.
        </p>
      </footer>
    </div>
  )
}
