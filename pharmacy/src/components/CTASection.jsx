import { Link } from 'react-router-dom';
import { IconArrowRight, IconCheckCircle } from './icons';

/**
 * Closing call to action. `audience` switches the framing so pharmacies and
 * clients each get an appropriate ask.
 */
export default function CTASection({
    audience = 'pharmacy',
    title,
    lead,
    primary,
    secondary,
}) {
    const isPharmacy = audience === 'pharmacy';

    const content = isPharmacy
        ? {
              eyebrow: 'For pharmacy owners',
              title: title ?? 'Put your pharmacy on PharmaPortal',
              lead:
                  lead ??
                  'Tell us where your pharmacy is and what you stock. We will walk you through the catalogue, your owner account and your seller logins, and show you how clients will find you.',
              primary: primary ?? { to: '/contact', label: 'Request the software' },
              secondary: secondary ?? { to: '/for-pharmacies', label: 'See what you get' },
              points: [
                  'Your products, prices and stock stay in your own account',
                  'You decide what is public and what stays internal',
                  'Ask us anything about getting your pharmacy set up',
              ],
          }
        : {
              eyebrow: 'For clients',
              title: title ?? 'Find the medication before you leave home',
              lead:
                  lead ??
                  'Search every pharmacy in the network, see which ones are near you and what they actually have in stock, then hold it for 24 hours while you travel.',
              primary: primary ?? { to: '/for-clients', label: 'How clients use it' },
              secondary: secondary ?? { to: '/showcase', label: 'See the interface' },
              points: [
                  'No more walking between pharmacies to ask',
                  'Hold a product for 24 hours instead of risking it selling',
                  'Price and availability shown before you set off',
              ],
          };

    return (
        <section className="bg-slate-900">
            <div className="container-app py-16 sm:py-20">
                <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
                    <div>
                        <span className="badge bg-white/10 text-pharmacy-200 ring-1 ring-white/15">
                            {content.eyebrow}
                        </span>
                        <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
                            {content.title}
                        </h2>
                        <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-300">{content.lead}</p>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <Link to={content.primary.to} className="btn-primary">
                                {content.primary.label}
                                <IconArrowRight className="h-4 w-4" />
                            </Link>
                            {content.secondary && (
                                <Link to={content.secondary.to} className="btn border border-white/20 text-white hover:bg-white/10">
                                    {content.secondary.label}
                                </Link>
                            )}
                        </div>
                    </div>

                    <ul className="space-y-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                        {content.points.map((p) => (
                            <li key={p} className="flex items-start gap-3">
                                <IconCheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-pharmacy-400" />
                                <span className="text-sm leading-relaxed text-slate-300">{p}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
