package com.capsule.springboot;

/*import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.web.servlet.error.ErrorMvcAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;

@EnableAutoConfiguration(exclude = { ErrorMvcAutoConfiguration.class })
@SpringBootApplication
@ComponentScan(basePackages = {"com.capsule.*"})
public class SpringBootData2Application {
	
	public static void main(String[] args) {
		try {
			System.out.println(" In Main Class");
		SpringApplication.run(SpringBootData2Application.class, args);
		
	}catch (Exception e) {
		System.out.println(" Exception "+e.getMessage());
		
	}
	}

}
*/

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.autoconfigure.jdbc.DataSourceTransactionManagerAutoConfiguration;
import org.springframework.boot.autoconfigure.orm.jpa.HibernateJpaAutoConfiguration;
import org.springframework.boot.autoconfigure.web.servlet.error.ErrorMvcAutoConfiguration;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;


//@EnableAutoConfiguration
//@EnableAutoConfiguration(exclude = {DataSourceAutoConfiguration.class, DataSourceTransactionManagerAutoConfiguration.class, HibernateJpaAutoConfiguration.class})
@EnableAutoConfiguration(exclude = { ErrorMvcAutoConfiguration.class })
@SpringBootApplication
@ComponentScan(basePackages = { "com.capsule.springboot*" })
public class SpringBootData2Application {
	
	public static void main(String[] args) {
		try {
			System.out.println("Main Application.");
			// SpringApplication.run(App.class, args);

			ApplicationContext ctx = SpringApplication.run(SpringBootData2Application.class, args);
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}

	}
	
	@SuppressWarnings("deprecation")
    @Bean
    public WebMvcConfigurer corsConfigurer() {
			return new WebMvcConfigurerAdapter() {
	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**").allowedOrigins("*");
				}
			};
		}

}
