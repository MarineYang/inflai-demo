import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Instagram, ArrowRight } from 'lucide-react';

export default function Analyze() {
  const [url, setUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const navigate = useNavigate();

  const handleAnalyze = async () => {
    if (!url) return;
    
    setIsAnalyzing(true);
    
    // 3초 후 결과 페이지로 이동 (실제 분석 시뮬레이션)
    setTimeout(() => {
      navigate('/result');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            계정 분석
          </h1>
          <p className="text-xl text-blue-200">
            AI가 당신의 인스타그램을 깊이 분석합니다
          </p>
        </div>

        {/* Analysis Card */}
        <Card className="bg-white/10 backdrop-blur-lg border-white/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Instagram className="h-6 w-6 text-pink-400" />
              인스타그램 계정 분석
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {!isAnalyzing ? (
              <>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-blue-200">
                    인스타그램 URL을 입력하세요
                  </label>
                  <Input
                    type="url"
                    placeholder="https://instagram.com/your_account"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  />
                </div>
                
                <Button
                  onClick={handleAnalyze}
                  disabled={!url}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  size="lg"
                >
                  <ArrowRight className="mr-2 h-5 w-5" />
                  AI 분석 시작
                </Button>
              </>
            ) : (
              <div className="text-center space-y-6 py-8">
                <div className="flex justify-center">
                  <Loader2 className="h-16 w-16 text-blue-400 animate-spin" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-white">
                    AI가 계정을 분석 중입니다...
                  </h3>
                  <p className="text-blue-200">
                    콘텐츠 패턴, 참여율, 성장 트렌드를 분석하고 있어요
                  </p>
                </div>
                
                <div className="space-y-2">
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full animate-pulse" style={{width: '70%'}}></div>
                  </div>
                  <p className="text-sm text-blue-300">분석 진행률: 70%</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Back Button */}
        <div className="text-center">
          <Button
            variant="outline"
            onClick={() => navigate('/')}
            className="!bg-transparent !hover:bg-transparent border-white/30 text-white hover:border-white/50"
          >
            홈으로 돌아가기
          </Button>
        </div>
      </div>
    </div>
  );
}