import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import GlassCard from '../common/GlassCard';
import { TAROT_CATEGORIES } from '../../utils/constants';

const CategorySelector = ({ onSelect }) => {
  const { t } = useLanguage();

  const categories = [
    {
      id: TAROT_CATEGORIES.LOVE,
      label: t('tarot.categories.love'),
      desc: t('tarot.categoryDesc.love'),
      icon: '💖',
      color: 'text-pink-400'
    },
    {
      id: TAROT_CATEGORIES.CAREER,
      label: t('tarot.categories.career'),
      desc: t('tarot.categoryDesc.career'),
      icon: '💼',
      color: 'text-blue-400'
    },
    {
      id: TAROT_CATEGORIES.FINANCE,
      label: t('tarot.categories.finance'),
      desc: t('tarot.categoryDesc.finance'),
      icon: '💰',
      color: 'text-emerald-400'
    },
    {
      id: TAROT_CATEGORIES.PERSONAL_GROWTH,
      label: t('tarot.categories.growth'),
      desc: t('tarot.categoryDesc.growth'),
      icon: '🌱',
      color: 'text-purple-400'
    }
  ];

  return (
    <div className="space-y-3">
      {categories.map((cat) => (
        <GlassCard
          key={cat.id}
          className="flex items-center gap-4 cursor-pointer hover:bg-white/10"
          onClick={() => onSelect(cat.id)}
          hover
        >
          <div className={`text-2xl p-3 bg-white/5 rounded-full ${cat.color}`}>
            {cat.icon}
          </div>
          <div>
            <h3 className="text-base font-bold text-white mb-0.5">
              {cat.label}
            </h3>
            <p className="text-xs text-gray-400 leading-tight">
              {cat.desc}
            </p>
          </div>
          <div className="ml-auto text-gray-500">
            ➔
          </div>
        </GlassCard>
      ))}
    </div>
  );
};

export default CategorySelector;
