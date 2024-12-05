import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">خطط الأسعار</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">الباقة الأساسية</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-3xl font-bold mb-4">999 ج.م</div>
              <ul className="text-right space-y-2">
                <li>✓ تصميم احترافي</li>
                <li>✓ موقع متجاوب</li>
                <li>✓ 5 صفحات</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-primary">
            <CardHeader>
              <CardTitle className="text-center">الباقة المتقدمة</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-3xl font-bold mb-4">1999 ج.م</div>
              <ul className="text-right space-y-2">
                <li>✓ كل مميزات الباقة الأساسية</li>
                <li>✓ 10 صفحات</li>
                <li>✓ لوحة تحكم</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-center">الباقة الاحترافية</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-3xl font-bold mb-4">2999 ج.م</div>
              <ul className="text-right space-y-2">
                <li>✓ كل مميزات الباقة المتقدمة</li>
                <li>✓ صفحات غير محدودة</li>
                <li>✓ دعم فني 24/7</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};