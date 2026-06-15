import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-100 via-white to-slate-50" />

      {/* Spacer for fixed navbar */}
      <div className="h-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Logo */}
        <div className="flex justify-center mb-10">
          <Image
            src="/images/dsaint-logo.png"
            alt="DSAINT Logo"
            width={700}
            height={
