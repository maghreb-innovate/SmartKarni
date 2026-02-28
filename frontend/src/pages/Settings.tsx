import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  Settings as SettingsIcon,
  LogOut,
  User,
  Mail,
  FileSpreadsheet
} from 'lucide-react';
import { toast } from 'sonner';

const Settings: React.FC = () => {
  const { user, profile, signOut } = useAuth();

  const handleLogout = async () => {
    await signOut();
    toast.success('تم تسجيل الخروج بنجاح');
  };

  const handleExport = () => {
    // TODO: Implement Excel export
    toast.info('سيتم إضافة هذه الميزة قريباً');
  };

  return (
    <div className="py-4 space-y-6" dir="rtl">
      {/* Header */}
      <div>
        <h1 className="text-xl font-bold text-foreground flex items-center gap-2">
          <SettingsIcon className="w-6 h-6 text-primary" />
          الإعدادات
        </h1>
      </div>

      {/* Profile Card */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <User className="w-4 h-4 text-primary" />
            معلومات الحساب
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center gap-3 py-2 border-b border-border/50">
            <User className="w-5 h-5 text-muted-foreground" />
            <div>
              <p className="text-sm text-muted-foreground">الاسم</p>
              <p className="font-medium">{profile?.full_name || 'غير محدد'}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 py-2">
            <Mail className="w-5 h-5 text-muted-foreground" />
            <div>
              <p className="text-sm text-muted-foreground">البريد الإلكتروني</p>
              <p className="font-medium" dir="ltr">{user?.email}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Export Data */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <FileSpreadsheet className="w-4 h-4 text-primary" />
            تصدير البيانات
          </CardTitle>
          <CardDescription>تصدير جميع البيانات إلى ملف Excel</CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={handleExport} variant="outline" className="w-full">
            <FileSpreadsheet className="w-4 h-4 ml-2" />
            تصدير إلى Excel
          </Button>
        </CardContent>
      </Card>

      {/* Logout */}
      <Card className="border-destructive/20">
        <CardContent className="p-4">
          <Button
            variant="outline"
            onClick={handleLogout}
            className="w-full text-destructive border-destructive/30 hover:bg-destructive/10"
          >
            <LogOut className="w-4 h-4 ml-2" />
            تسجيل الخروج
          </Button>
        </CardContent>
      </Card>

      {/* Version */}
      <p className="text-center text-xs text-muted-foreground pb-4">
        سمارت كارني - الإصدار 1.0.0
      </p>
    </div>
  );
};

export default Settings;
